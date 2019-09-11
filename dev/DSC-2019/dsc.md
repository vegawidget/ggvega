DSC prep
================

<br />

### GGVEGA

The ggvega package was created to translate from ggplot2 to Vega-Lite,
inspired by the capability `plotly::ggplotly()` provides to translate
from ggplot2 to plotly. This project has been supported by Iowa State
University, Schneider Electric, and GSOC.

The main motivation for this project is to achieve a system that allows
us to work in the familiar ggplot2 environment but with interactive
capabilities, such as linked brushing. Additionally, on the Schneider
Electric side of this project, one of the main goals is to be able to
build & deploy visual components (in JS and HTML) that can be extensible
to new data. (think “update-able” dashboards)

This goal, being extensible to new data, has been a guiding principle
when making fundamental design choices. This is one aspect that
distinguishes this effort from `plotly::ggplotly()`
([link](https://plotly-r.com/client-side-linking.html#statistical-queries-ggplot)):

> Compared to `plot_ly()`, statistical queries (client-side) with
> `ggplotly()` are fundamentally limited. That’s because, the
> statistical R functions that ggplot2 relies on to generate the
> graphical layers can’t necessarily be recomputed with different input
> data in your web browser.

<br/>

### Why Vega-Lite?

Our requirements for the JavaScript library:

  - has the grammar of graphics at its foundation  
  - is easy to use  
  - is able to be linked with other preexisting htmlwidgets  
  - can be tied to ggplot2

Vega is a JavaScript library designed to be a visualization grammar that
is built for analysis. If Vega is the grammar, then D3 can be considered
the alphabet for the grammar. Vega and Vega-lite are led by a team from
the University Washington Interactive Data Lab directed by Jeff Heer.

A large part of the appeal of Vega and Vega-lite is the implementation
of visualization terms. With the grammar of graphics at its core, Vega
and Vega-lite are built on a stable foundation. Vega-lite is “a
higher-level grammar for visual analysis, comparable to ggplot or
Tableau, that generates complete Vega specifications.” Both Vega and
Vega-lite use a JSON specification to create a visualization, with
Vega-lite first compiling to Vega and then rendered using Vega’s
compiler.

### Grammar of Graphics

Developed by Leland Wilkinson in 1999, the grammar of graphics provides
an abstraction which makes thinking, reasoning, and communicating
graphics easier. Rather than thinking about a limited set of graphs, the
grammar instructs to think about graphical forms.

Having this abstraction is beneficial both the user and the developer of
statistical graphics. It encourages us to customize graphics for a
particular problem rather than relying on generic names graphics.
([link](https://byrneslab.net/classes/biol607/readings/wickham_layered-grammar.pdf))
In addition, new capabilities are easier to create.

### Motivation

(Note to Haley: instead of staring blankly at the screen, I am just
going to write stuff in hopes that I can rearrange it later into
something more-coherent - this is likely repeated elsewhere and I will
need to clean that up, too.)

The grammar-of-graphics, as implemented in ggplot2, provides an R user
with a tremendous set of capabilities with which to design
data-visualizations.

One of our motivations (as Schneider Electric) is to provide a stronger
connection between the data-scientists who design visualizations and the
customers who use these visualizations.

One of the challenges to the data-scientist is to design visualizations
that take into account new data, and especially new data that the
data-scientist may not have seen. The design of the visualization has to
be extensible to new data; the implementation of the visualization also
has to be extensible to new data.

The ggplot2 package is declarative; we tell it what we want, and ggplot2
handles the rest with a set of sensible defaults. Vega-Lite is similarly
declarative, but with a different set of defaults.

A motivating use-case for ggvega:

  - a data-scientist designs a visualization using R with ggplot2
  - the ggplot2 object is translated to a Vega-Lite specification (using
    ggvega)
  - the Vega-Lite specification can be deployed to production,
    independently of the data used to design it. Vega provides the means
    to update Vega views with new data.

**A *layered* Grammar-of-Graphics**

<img src="dsc_files/ggplot2.png" height="100">

By implementing the grammar of graphics, ggplot2 has transformed not
only the way we make visualizations, but also the way we *think* about
the components of a graphic.

Four basic components that form a layer:

  - **data**,  
  - **stat**,  
  - **mapping**,  
  - **geom**,

The layer component is particularly important as it determines the
physical representation of the data, with the combination of stat and
geom defining many familiar named graphics: the scatterplot, histogram,
contourplot, and so on.

<br />

**Vega-Lite’s relation to ggplot2**

<img src="dsc_files/vl2.png" height="100">

Four basic components that …

  - **data**,  
  - **transform**,  
  - **encoding**,  
  - **mark**,

<br />

The empowerment of an abstract decomposition (such as the grammar) is
not unique to the world of statistical graphics.

<br />

**Grammar-of-Graphics as Food**

<img src="dsc_files/ggfood2.png" height="100">

Four basic factors that determine how good your food will taste:

  - **salt**, which enhances flavor  
  - **fat**, which amplifies flavor and makes appealing textures
    possible
  - **acid**, which brightens and balances
  - **heat**, which ultimately determines the texture of food

Salt, Fat, Acid, and Heat are the four cardinal directions of cooking.
These four elements are what allow *all* great cooks to cook
consistently delicious food.

<br/>

### Design philosophy

Our *initial* philosophy was to manage a small set of plots (perhaps
something like scatter-plots, line-charts, bar-charts, and histograms),
but to manage these translations in a robust way that we can extend in
the future. In other words, **a narrow scope built on a firm
foundation**.

We hope that the foundation that we develop support this sub-set of
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
and then convert a “ggspec” into a Vega-Lite specification or
“vegaspec”.

The ideas for “ggspec” are

  - to remain faithful to the ggplot2 object and philosophy
  - to publish a JSON schema that represents the range of “things” that
    we will be able to translate
  - to provide the means to generate a JSON specification that meets
    this schema, given a ggplot2 object

The ggspec should record only those things that deviate from ggplot2
defaults; one should be able to take a ggspec and recreate the ggplot
object that it came from.

Accordingly, we think to specify things in Vega-Lite only as they differ
from the Vega-Lite defaults. Our goal is to capture the “essence” of the
ggplot, its intentions, then to implement in a default Vega-Lite
specification. To replicate the default color-maps and appearance, we
recommend using a Vega theme (we hope to propose a better ggplot2-theme
for Vega).

The ggspec is then converted into a vegaspec. As a first approach, we
took inspiration from Vega-Lite itself, which translates a Vega-Lite
specification into a Vega specification. This compiler is developed in
TypeScript, then compiled into ECMAScript 6 (JavaScript), as described
in the [Vega-Lite contribution
guide](https://github.com/vega/vega-lite/blob/master/CONTRIBUTING.md#suggested-programming-environment).

We hope that the ggspec can be a useful abstraction to help us
understand “what is going on in ggplot2” and “how does this intersect
with Vega-Lite?”. As well, should ggplot2 or Vega-Lite change, we hope
that we could keep ggspec “fixed” such that we would have to adapt only
that part of the translation process (ggplot2-to-ggspec or
ggspec-to-Vega-Lite) that would be impacted by such a change.

As we developed ggspec, we had a couple of idea about what it should be:

  - the idealized version *could be* a JSON-serializable representation
    of any possible ggplot object; that it could also be a loss-less
    representation of any ggplot object.
  - the actualized version *is* a JSON-serializable representation of a
    ggplot object that we can translate into Vega-Lite.

In an ideal world, we might have taken on the *idealized* ggspec, then
defined an *actualized* subset. However, in the interests of “getting
something done”, we considered briefly the first possibility, then went
straight for the second possibility.

<br />

### Limitations

We are very restrictive on the expressions we will allow for aesthetic
mappings in ggplot. We currently support variable-names only; the only
foreseeable exception to this will be to manage factors.

**Issues with ES5/ES6/V8/node.js**:

**Mismatches between ggplot2 and Vega-Lite**:

  - `positionDodge` and `positionJitter` – Vega-Lite is working on
    implementing this? PR: vega/vega-lite\#4969

  - `geom_path()` based on order (there used to be an order aesthetic?)
    vs. in Vega-Lite there is an order encoding

  - ordering of ordered factors and being extensible to new data
    
      - ex. populations of cities bar chart
          - In ggplot2, use forcats package to order according to
            population size – cannot capture this because it happens
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

![](dsc_files/figure-gfm/unnamed-chunk-1-1.svg)<!-- -->

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
addressing this issue in ggvega/ggplot2.

<br />

### Potential future paths

New to Vega-Lite 4.0 (currently in beta):

  - [regression](https://vega.github.io/vega-lite/docs/regression.html)
  - [loess](https://vega.github.io/vega-lite/docs/loess.html)
  - [density](https://vega.github.io/vega-lite/docs/density.html)

**Design choice \#2**: Should the transformations take place in R or put
into the Vega-lite specification?

Option 1: If the Vega-Lite spec does an aggregate, do the aggregation in
R instead of JS so that the resulting htmlwidget has a much smaller data
set.

Option 2: Have the output (the Vega-Lite specification) act as a
component so that we can the change different data sets in and out of
the Vega-Lite specification only.

More generally, can we write a specification such that the
transformation is done *somewhere*? For example somewhere could be:

  - a remote R session (using Shiny)
  - a remote SQL database
  - the JavaScript client (the browser itself)

Then the questions could become:  
\- How do we write the Vega(-Lite) specification such that the
transformation could be done anywhere?  
\- Given a Vega-Lite specification, how to we implement the
transformation so that it will be made at a given place?

**Questions**:

  - How to capture transformation logic in the Vega-Lite spec so that it
    can stand more “independently” as a single repository of the intent
    of the visualization – for deployments where R is not available?
    
      - build in R but deploy independently of R

  - How to translate an R expression into a JS expression

  - How to create a general translation capability between dplyr and a
    set of Vega-Lite transformations?

### Roadmap

Here’s what we can do now (hopefully as of the DSC presentation):

  - `geom_point()` and `geom_bar()`
  - `stat_count()`
  - `position_stack()` and `position_fill()`
  - `coord_flip()`
  - labels
  - extract name from scales
  - if we have a single-layer ggplot object, we can create a single-view
    Vega-Lite specification

Here’s what we will take on next:

  - `stat_bin()`, enabling histograms
  - `geom_line()`
  - `facet_grid()` and `facet_wrap()`
  - `geom_boxplot()` (`stat_boxplot()`)
  - scales (this will be an undertaking)
  - a framework to handle temporal values (another undertaking)

Smaller-scale extensions:

  - implement `geom_path2()`, using an order aesthetic
  - implement `stat_reorder()`

Larger-scale extensions:

  - stat-expressions
  - field-expressions
  - this question of being able to specify where a transformation is
    done

As these capabilities are released in Vega-Lite:

  - `geom_smooth()`
  - `geom_density()`
  - `position_dodge()` and `position_jitter()`

### Parting thoughts

Visualization and modeling are complementary steps in the data-analysis
process (Hadley Wickham)  
\- visualization requires people to scale  
\- easy to get more CPU’s, less easy to get more people  
\- we can use interactive visualization to make people more-efficient