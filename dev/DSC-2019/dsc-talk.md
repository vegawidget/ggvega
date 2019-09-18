DSC prep
================

<br />

### GGVEGA

The ggvega package was created to translate from ggplot2 to Vega-Lite,
inspired by the capability `plotly::ggplotly()` provides to translate
from ggplot2 to plotly.

### Motivation

#### 1\. build & deploy visual components

One of our motivations which comes from the Schneider Electric side of
this project, is to provide a stronger connection between the
data-scientists who design visualizations and the customers who use
these visualizations.

One of the challenges to the data-scientist is to design visualizations
that take into account new data, and especially new data that the
data-scientist may not have seen. The design of the visualization has to
be extensible to new data; the implementation of the visualization also
has to be extensible to new data.

That said, on the Schneider Electric side of this project, one of the
main goals is to be able to build & deploy visual components (in JS and
HTML) that can be extensible to new data. (think “update-able”
dashboards)

This goal, being extensible to new data, has been a guiding principle
when making fundamental design choices. This is one aspect of ggvega
that distinguishes this effort from `plotly::ggplotly()`.

It should be noted that the statistical queries with `ggplotly()` that
are fundamentally limited, is because the statistical R functions that
ggplot2 relies on to generate the graphical layers can’t necessarily be
recomputed with different input data in your web browser.

#### 2\. ggplot2 + interactivity

The main motivation for this project is to achieve a system that allows
us to work in the familiar ggplot2 environment but with interactive
capabilities, such as tooltips and linked brushing.

Because we are interested in having these interactive capabilities
function in the browser, we turned to JavaScript.

Our set of requirements for the JavaScript library was, on one hand,
that it is open source and simple enough to use. On the other hand, what
we were really looking for was a JavaScript library that has the grammar
of graphics at its foundation as we believed the grammar would provide a
smoother path for us to tie the library to ggplot2.

This search led us to Vega & Vega-Lite.

#### Vega & Vega-lite

Vega is a JavaScript library designed to be a visualization grammar that
is built for analysis. Vega-lite is “a higher-level grammar for visual
analysis, said to be comparable to ggplot or Tableau, that generates
complete Vega specifications.”

Both Vega and Vega-lite use a JSON specification to create a
visualization, with Vega-lite first compiling to Vega and then rendered
using Vega’s compiler.

A large part of the appeal of Vega and Vega-lite is the implementation
of visualization terms. With the grammar of graphics at its core, Vega
and Vega-lite are built on a stable foundation.

#### A motivating use-case for ggvega:

Our vision for the project was for a data-scientist to have the ability
to design a visualization in R using ggplot2. The ggplot2 object would
then be translated to a Vega-Lite specification (using ggvega). The
resulting Vega-Lite specification could then be deployed to production
outside of R and independent of the data used to design it.
Additionally, Vega provides the means to update Vega views with new
data.

### Design philosophy

There were some key design choices we made early on that made a large
impact on the package.

#### Fundamental design choices

**Design choice \#1**: Do we capture the intention or the
implementation?

First, we decided that ggvega would seek to capture the *intent* of a
ggplot. This is distinct from the *implementation* of a ggplot, the path
`ggplotly()` takes. Our idea is to let the powerful defaults of the two
packages take care of most of the work. In addition, we anticipate
creating (at some point in the (hopefully not-too-)distant future) a
Vega-lite theme that can be applied to the visual components.

**Our *initial* philosophy** was to manage a small set of plots (perhaps
something like scatter-plots, line-charts, bar-charts, and histograms),
but to manage these translations in a robust way that we can extend in
the future. In other words, we sought to maintain **a narrow scope built
on a firm foundation**.

We hope that this foundation that we developed to support this subset of
capabilities will serve us well as we expand ggvega’s capabilities.

**Our approach**

We decided to have our translation take place in 2 steps.

We first convert a ggplot2 object into a JSON-serializable list that we
call “ggspec”.

The second step then is to convert the “ggspec” into a Vega-Lite
specification that we call “vegaspec”.

We hope that the ggspec can be a useful abstraction to help us
understand 1) “what is going on in ggplot2” and 2) “how does this
intersect with Vega-Lite?”.

As well, should ggplot2 or Vega-Lite change, we hope that we could keep
ggspec “fixed” such that we would have to adapt only that part of the
translation process (ggplot2-to-ggspec or ggspec-to-Vega-Lite) that
would be impacted by such a change.

**ggplot2 -\> ggspec**

The ideas for “ggspec” are for it to remain faithful to the ggplot2
object and philosophy, to publish a JSON schema that represents the
range of “things” that we will be able to translate, and to provide the
means to generate a JSON specification that meets this schema, given a
ggplot2 object.

The ggspec should record only those things that deviate from ggplot2
defaults; one should be able to take a ggspec and recreate the ggplot
object that it came from.

Accordingly, we think to specify things in Vega-Lite only as they differ
from the Vega-Lite defaults. Our goal is to capture the “essence” of the
ggplot, its intentions, then to implement in a default Vega-Lite
specification.

#### Idealized vs. Actualized

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

**ggspec -\> vegaspec**

The ggspec is then converted into a vegaspec.

As a first approach, we took inspiration from Vega-Lite itself, which
translates a Vega-Lite specification into a Vega specification.

This compiler is developed in TypeScript, then compiled into ES5.

**ggplot2 -\> vega-lite**

To use ggvega, we will first build our chart in ggplot2. We then call
the function `as_vegaspec()` which will both the translate from ggplot2
to Vega-lite and render the Vega-lite JSON specification. The vegawidget
`as_vegaspec()` generic has a method for ggplot2 objects. vegawidget is
an htmlwidget that also lives within the vegawidget GitHub organization.

**multi-view vs. single-view**

Given the layered nature of gplot2, we decide that, by default, ggvega
will define a Vega-lite specification with layers.

In the Vega-Lite-world, this is a type of view composition (`facet`,
`concat`, and `repeat` being the other options for view composition)
where the charts on superimposed on top of another. While this has
become second nature to us in the ggplot2-world, Vega-Lite does not
require a chart to be “layered”. There is a “single-view specification”
where the encodings are specified at the top-level of the specification.
Alternatively, in a layered chart, multiple specifications are placed
into an array under the layer property.

This is what ggvega does by default, even if there is only one layer
specified. If we have a single-layer ggplot object, we can create a
single-view Vega-Lite specification using the `single_view = TRUE`
option in `as_vegaspec()`.

### Examples: ggvega in use

#### ggvega

To use ggvega, we will first build our chart in ggplot2. We then call
the function `as_vegaspec()` to compose and render the Vega-lite JSON
specification. The vegawidget `as_vegaspec()` generic has a method for
ggplot2 objects. vegawidget is an htmlwidget that also lives within the
vegawidget GitHub organization and is used to render the specification
created by ggvega.

To begin I created a scatterplot in ggplot2 using the infamous iris
dataset showing `Petal.Width` on the x-axis and `Petal.Length` on the
y-axis and the points colored according to the iris species. The
‘as\_vegaspec()’ function is used to take care of both the translation
from ggplot2 to Vega-lite and the rendering of the Vega-lite JSON
specification.

``` r
library("ggplot2")
library("ggvega")
plot <- ggplot(iris) + 
  geom_point(aes(x = Petal.Width, y = Petal.Length, colour = Species))

as_vegaspec(plot)
```

![](dsc-talk_files/figure-gfm/unnamed-chunk-1-1.svg)<!-- -->

#### ggvega + vlbuildr

One of the neatest aspects of this project is that we can mix-and-match
with other packages within the vegawidget GitHub organization for
additional capabilities. For example, once the Vega-Lite specification
has been created, we can use vlbuildr to modify the specification.
vlbuildr, as you likely remember from Alicia’s talk before mine, is “a
functional approach to building up specifications” and the package
contains functions that can add various components to a specification.

In this example, we will take the chart from the previous slide but
modify it using vlbuildr. Using `vl_encode_fill()` from vlbuildr we can
modify the points so that they are now filled with the color of the iris
species, rather than outlined circles.

``` r
library("ggplot2")
library("ggvega")
library("vlbuildr")

plot <- ggplot(iris) + 
  geom_point(aes(x = Petal.Width, y = Petal.Length, colour = Species))

as_vegaspec(plot) %>%
vl_encode_fill("Species:N")
```

![](dsc-talk_files/figure-gfm/unnamed-chunk-2-1.svg)<!-- -->

#### add interactivity\!

With vlbuildr we are also able to add interactivity. We are very excited
to be able to add selections and conditional encodings without
addressing this issue in ggvega/ggplot2.

Using the first example as a starting point, we want to be able to add
in an encoding for opacity and a selection that specifies that if the
point is selected, the opacity is 1 and if it is not selected, that the
opacity will be 0.3. We also need to have a single-view Vega-Lite
specification created as we are not able to add selections to a layered
specification.

We’ll then do all of these steps for a scatterplot for sepal width and
length and concatenate the two specs.

So we started this journey in ggplot2 and ended up at this point where
we have a Vega-lite specification with interactivity that can be
embedded or deployed outside of R.

<br />

### Limitations

**Issues with ES5/ES6/V8/node.js**:

<!--
One of the inspirations for this project is the Altair Python library, which generates its functions automatically according to the Vega-Lite schema. As a result, when Vega-Lite updates, much of the Python code that makes up the Altair package can be updated automatically. 

At the outset of our efforts (May 2019), we were not aware of tools that could generate R code automatically using a JSON schema as a blueprint. This changes with the development of {vlmetabuildr}, which we would consider using as it matures. 

Although Python is accessible from R, there can be installation frustrations. 

This leaves us with JavaScript. The {V8} package makes it very easy to call JavaScript code from R; the installation-process is much-less frustrating than Python. Our goal is to compile a JSON object that follows one schema (ggschema) into a JSON object that follows another schema (Vega-Lite). In very broad terms, this is what Vega-Lite itself does. Like the Vega team, we use JavaScript's strongly-typed friend TypeScript to compose the code.

JavaScript does present some complications, though. -->

Although there are many versions of JavaScript, two loom large: ES5 and
ES6. The conundrum that we encountered is that while all modern browsers
support ES6; infamously, the last version of Internet Explorer supports
only ES5. For the {V8} package, as of its latest CRAN release, supports
ES6 for all platforms except some older Linux platforms, e.g. Ubuntu
16.04. This platform is still in wide usage, as it forms the foundation
for RStudio Cloud.

Therefore, we have to write code that can be run on an ES5 JavaScript
engine. As of version 3.0, Vega-Lite is written using ES6.

This did make some of aspects of the package more difficult but will
likely not be an issue for too long.

<!--
The Vega-Lite team have made a tool to convert JavaScript classes into a schema; we use this to create ggschema from classes. We also need a way to recover the Vega-Lite classes from the schema. If we had complete support for ES6, we could use the Vega-Lite classes themselves. 

Instead, because we have to use ES5, we use a JavaScript library called "quicktype" to recover a set of Vega-Lite classes using the Vega-Lite schema. However, the "recovered" classes from the schema are not identical to the Vega-Lite classes. This might be a little bit like a translating from English to French, then back to English, recovering different prose.

This leads to quicktype giving some "Vega-Lite" classes some strange names due to its interpretation of the schema.

This "problem" will go away when we have sufficient ES6 coverage for {V8}, or when we are able to recover faithfully the Vega-Lite classes in R.

-->

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

**Limitations in Vega-Lite**:

  - We are very restrictive on the expressions we will allow for
    aesthetic mappings in ggplot. We currently support variable-names
    only; the only foreseeable exception to this will be to manage
    factors.

  - Temporal values: In R, a `POSIX.ct` object has access to a timezone
    database via the operating system. In JavaScript, a `Date` object
    has access only to the timezone of the browser and UTC. The
    Vega-Lite `temporal` type is based on the JavaScript `Date` type, so
    its access to timezone information is similarly limited.

This becomes a problem if the timezone of the data does not match the
timezone of the browser; this would not be an uncommon situation.

There are workarounds, but they involve compromises.

  - There is a lot of flexibility in specifying interactions (which is
    good), but not a lot of support for signifying the presence of
    interactivity or showing how it is expected to work. This is an area
    where Plotly has an advantage.

  - Related, Vega-Lite selections do not work well on mobile devices.

<br />

### Potential future paths

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

#### What we can do now + what we will do next:

The first geom we implemented was `geom_point()`. We then moved to
`geom_bar()` which brought along `stat_count()`, `position_stack()` and
`position_fill()`, and `coord_flip()`.

  - `geom_point()` and `geom_bar()`
  - `stat_count()`
  - `position_stack()` and `position_fill()`
  - `coord_flip()`
  - labels
  - extract name from scales
  - if we have a single-layer ggplot object, we can create a single-view
    Vega-Lite specification

Here’s

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

New to Vega-Lite 4.0 (currently in beta):

  - [regression](https://vega.github.io/vega-lite/docs/regression.html)
  - [loess](https://vega.github.io/vega-lite/docs/loess.html)
  - [density](https://vega.github.io/vega-lite/docs/density.html)
