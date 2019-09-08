DSC prep
================

<br />

### GGVEGA

The ggvega package was created to translate from ggplot2 to Vega-Lite,
inspired by the capability `plotly::ggplotly()` provides to translate
from ggplot2 to plotly. This project has been supported by Iowa State
University, Schneider Electric, and GSOC.

The main motivation for project is to achieve a system that allows us to
work in the familiar ggplot2 environment but also has interactive
capabilities, such as linked brushing. Additionally, on the Schneider
Electric side of this project, one of the main goals is to build &
deploy visual components (in JS and HTML) that can be extensible to new
data. (think “update-able” dashboards)

This goal, being extensible to new data, has been a guiding principle
when making fundamental design choices. This is one aspect to
distinguish this effort from `plotly::ggplotly()`
([link](https://plotly-r.com/client-side-linking.html#statistical-queries-ggplot)):

> Compared to `plot_ly()`, statistical queries (client-side) with
> `ggplotly()` are fundamentally limited. That’s because, the
> statistical R functions that ggplot2 relies on to generate the
> graphical layers can’t necessarily be recomputed with different input
> data in your web browser.

<br/>

### Why Vega-Lite?

Vega-Lite is developed by the Interactive Data Lab, U Washington. Built
on Vega, Vega-Lite is more concise, but less expressive.

  - interactive grammar-of-graphics
  - JavaScript, rendered in the browser

**Grammar of Graphics / relation to ggplot2**:

This would seem a great opportunity to build on a popular, well-written,
and well-illustrated book on cooking :) (absolutely\!)

<br />

### Design philosophy

Our *initial* philosophy was to manage a small set of plots (perhaps
something like scatter-plots, line-charts, bar-charts, and histograms),
but to manage these translations in a robust way that we can extend in
the future. In other words, **a narrow scope built on a firm
foundation**.

We hope that the foundation that we develop supporet this sub-set of
capabilities will serve us well as we expand.

**Design choice \#1**: Do we capture the intention or the
implementation?

ggvega seeks to capture the *intent* of a ggplot. This is distinct from
the *implementation* of a ggplot (the path `ggplotly()` takes). Our idea
is to let the powerful defaults of the two packages take care of most of
the work. In addition, we anticipated (at some point in the (hopefully
not-too-)distant future) creating a Vega-lite theme for the visual
components.

<br />

### Our approach

We convert a ggplot2 object into a “ggspec”, a JSON-serializable list,
and then convert “ggspec” into a Vega-Lite specification.

The ideas for “ggspec” were

  - to remain faithful to the ggplot2 object and philosophy
  - to publish a JSON schema that represents the range of “things” that
    we will be able to translate,
  - to provide the means to generate a JSON specification that meets
    this schema, given a ggplot2 object.

The ggspec should record only those things that deviate from ggplot2
defaults. Accordingly, we think to specify things in Vega-Lite only if
they differ from the Vega-Lite defaults. Our goal is to capture the
“essence” of the ggplot, its intentions. To replicate the default
color-maps and appearance, we recommend using a Vega theme (we hope to
propose a better ggplot2-theme for Vega).

The ggschema JSON-specification is then converted into a Vega-Lite
JSON-specification. Here, as a first approach, we took inspiration from
Vega-Lite itself, which translates a Vega-Lite specification into a Vega
specification. This is developed in TypeScript, then compiled into
ECMAScript 6 (JavaScript), as described in the [Vega-Lite contribution
guide](https://github.com/vega/vega-lite/blob/master/CONTRIBUTING.md#suggested-programming-environment).

<br />

### Limitations

We are very restrictive on the expressions we will allow for aesthetic
mappings in ggplot. We currently support variable-names only; the only
foreseeable exception to this will be to manage factors.

**Issues with ES5/ES6/V8/node.js**:

**Mismatches between ggplot2 and Vega-Lite**:

  - `positionDodge` and `positionJitter` – Vega-Lite is working on
    implementing this?

  - `geom_path()` based on order (there used to be an order aesthetic?)
    vs. in Vega-Lite there is an order encoding

  - ordering of ordered factors and being extensible to new data
    
      - ex. populations of cities bar chart
          - In ggplot2, use forcats package to order according to
            population sie – cannot capture this because it happens
            outside the ggplot object.
          - Can we use (create?) a `stat_order()` to do this??

<br />

### Examples: ggvega in use

vegawidget, an htmlwidget within the vegawidget GitHub organization, is
used to render the specification created by ggvega.

``` r
library("ggplot2")
library("ggvega")
plot <- ggplot(iris) + 
  geom_point(aes(x = Petal.Width, y = Petal.Length, colour = Species))

as_vegaspec(plot)
```

    ## [1] "Error printing vegawidget in non-HTML format:"                                                                                                     
    ## [2] "parse error: premature EOF\n                                       {\"$schema\":\"https://vega.github\n                     (right here) ------^\n"

Once the Vega-Lite specification has been created, we can use vlbuildr,
another package within the vegawidget GitHub organization, to modify the
specification. vlbuildr is “a functional approach to building up
specifications” and the package contains functions that can add various
components to a specification.

``` r
library("ggplot2")
library("ggvega")
library("vlbuildr")

plot <- ggplot(iris) + 
  geom_point(aes(x = Petal.Width, y = Petal.Length, colour = Species))

as_vegaspec(plot) %>%
vl_encode_fill("Species:N")
```

![](dsc_files/figure-gfm/unnamed-chunk-2-1.svg)<!-- -->

With vlbuildr, we can add selections and conditional encodings without
addresssing this issue in ggvega/ggplot2.

<br />

### Potential future paths

**Design choice \#2**: Should the transformations take place in R or put
into the Vega-lite specification?

Option 1: If the Vega-Lite spec does an aggregate, do the aggregation in
R instead of JS so that the resulting htmlwidget has a much smaller data
set

Option 2: Have the output (the Vega-Lite specification) act as a
component so that we can the change different data sets in and out of
the Vega-Lite specification only.

**Questions**:

  - How to capture transformation logic in the Vega-Lite spec so that it
    can stand more “independently” as a single repository of the intent
    of the visualization – for deployments where R is not available?
    
      - build in R but deploy independently of R

  - How to translate an R expression into a JS expression

  - How to create a general translation capability between dplyr and a
    set of Vega-Lite transformations?
