DSC prep
================

<br />

### GGVEGA

The ggvega package was created to translate from ggplot2 to Vega-Lite,
inspired by the capability the R package plotly provides to translate
from ggplot2 to plotly.

### Motivation

#### 1\. build & deploy visual components

The motivation for this project had 2 main parts. One was to being
interactivity to ggplot2 and the other was to have a method of deploying
visualizations designed in ggplot2 into production.

Schneider Electric is interesting in providing a stronger connection
between the data-scientists who design visualizations and the customers
who use these visualizations.

One of the challenges to the data-scientist is to design visualizations
that take into account new data, and especially new data that the
data-scientist may not have seen. The design of the visualization has to
be extensible to new data; the implementation of the visualization also
has to be extensible to new data.

That said, on the Schneider Electric side of this project, one of the
main goals is to be able to build & deploy visual components (in JS and
HTML) that can be extensible to new data, in the likes of “update-able”
dashboards.

This goal, being extensible to new data, has been a guiding principle
when making fundamental design choices. This is one aspect of ggvega
that distinguishes this effort from `plotly::ggplotly()`.

It should be noted that the statistical queries with `ggplotly()` are
fundamentally limited because the statistical R functions that ggplot2
relies on to generate the graphical layers can’t necessarily be
recomputed with different input data in your web browser.

In contrast, we have an example here of a bar chart that is extensible
to new data. For the data, 100 observations have been generated with the
values “a”, “b”, “c”, “d”, or “e”. The bars then display the relative
counts of the letters. We can see the first two observations of the data
below the chart. What is important here is that the data contains the
raw observations as opposed to containing the aggregation. This allows
us to swap in a new set of observations, without modifying the chart
itself – only the data will change.

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
analysis, said to be comparable to ggplot or Tableau.”

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

Here we have an example of a line chart that is consistently being
updated with new data. We can reset the chart.

### Design philosophy

There were some key design choices we made early on that made a large
impact on the package.

#### Fundamental design choices

**Design choice \#1**: Do we capture the intention or the
implementation?

First, we decided that ggvega would seek to capture the *intent* of a
ggplot. This is distinct from the *implementation* of a ggplot, the path
`ggplotly()` takes. Our idea is to let the powerful defaults of the two
packages take care of some of the work. In addition, we anticipate
creating (at some point in the (hopefully not-too-)distant future) a
Vega-lite theme that can be applied to the visual components.

**Our *initial* philosophy** was to manage a small set of plots (perhaps
something like scatter plots, line charts, bar charts, and histograms),
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
translation process that would be impacted by such a change.

**ggplot2 -\> ggspec**

The ideas for “ggspec” are for it to remain faithful to the ggplot2
object and philosophy, to publish a JSON schema that represents the
range of “things” that we will be able to translate, and to provide the
means to generate a JSON specification that meets this schema, given a
ggplot2 object.

ggspec is computed “under-the-hood” and is not necessarily something a
user of ggvega would be aware of.

The ggspec should record only those things that deviate from ggplot2
defaults; one should be able to take a ggspec and recreate the ggplot
object that it came from.

Accordingly, we think to specify things in Vega-Lite only as they differ
from the Vega-Lite defaults. Our goal is to capture the “essence” of the
ggplot, its intentions, then to implement in a default Vega-Lite
specification.

**ggspec -\> vegaspec**

The ggspec is then converted into a vegaspec.

As a first approach, we took inspiration from Vega-Lite itself, which
translates a Vega-Lite specification into a Vega specification.

This compiler is developed in TypeScript, then compiled into ES5.

**ggplot2 -\> vega-lite**

To use ggvega, we will first build our chart in ggplot2. We then call
the function `as_vegaspec()` which will both translate from ggplot2 to
Vega-lite and render the Vega-lite JSON specification. The
`as_vegaspec()` generic has a method for ggplot2 objects and hails from
the vegawidget package which is an htmlwidget that also lives within the
vegawidget GitHub organization.

**multi-view vs. single-view**

Given the layered nature of ggplot2, we decide that, by default, ggvega
will define a Vega-lite specification with layers.

In the Vega-Lite-world, this is a type of view composition where the
charts are superimposed on top of another. While this has become second
nature to us in the ggplot2-world, Vega-Lite does not require a chart to
be “layered”. There is a “single-view specification” where the encodings
are specified at the top-level of the specification.

Alternatively, in a layered chart, multiple specifications are placed
into an array under the “layer” property. This is what ggvega does by
default, even if there is only one layer specified.

If we have a single-layer ggplot object, we can create a single-view
Vega-Lite specification using the `single_view = TRUE` option in
`as_vegaspec()`.

### Examples: ggvega in use

#### ggvega

To begin I created a scatterplot in ggplot2 using the infamous iris
dataset showing petal width on the x-axis and petal length on the y-axis
and the points colored according to the iris species.

The ‘as\_vegaspec()’ function is used to translate from ggplot2 to
Vega-lite and then to render this Vega-lite JSON specification.

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

As you can see, we now have a rectangular brush defined that can e used
to modify the opacity of the points selected.

### and concat\!

We’ll then do all of these steps for a scatterplot for sepal width and
length and concatenate the two specs.

So we started this journey in ggplot2 and ended up at this point where
we have a Vega-lite specification with interactivity that can be
embedded or deployed outside of R.

<br />

### Limitations

Indeed, ggvega does have its own set of limitations.

**Issues with ES5/ES6/V8/node.js**:

One conundrum that we encountered is what version of JavaScript to use.

While there are many versions on JavaScript - 2 loom large: ES5 and ES6.

While all modern browsers support ES6; infamously, the last version of
Internet Explorer supports only ES5. As much of the Schneider Electric
team uses Internet Explorer, this was an issue for us.

Additionally, the V8 package, as of its latest CRAN release, supports
ES6 for all platforms except some older Linux platforms. One of those
being Ubuntu 16.04 which is still in wide usage, as it forms the
foundation for RStudio Cloud.

Therefore, ggvega needs to written in ES5, even though, as of version
3.0, Vega-Lite is written using ES6.

This did make some of aspects of the package more difficult, but it will
likely not be an issue for too long.

**Mismatches between ggplot2 and Vega-Lite**:

There are some mismatches between ggplot2 and Vega-Lite. One being that
`geom_path()` is based on the order of the data while in Vega-Lite there
is an order encoding.

Additionally, there are not currently Vega-Lite implementations of
`positionDodge` and `positionJitter` though the Vega-Lite team is
working on this.

There are some issues with the chart remaining extensible to new data
when factors are involved that we have not quite worked out yet.

One of those is that if the forcats package is used to order a bar chart
according to size in an example like this, we cannot capture this
because it happens outside the ggplot object.

**Limitations in ggvega**:

As for some of the current limitations in ggvega,

We are very restrictive on the expressions we will allow for aesthetic
mappings in ggplot. We currently support variable-names only; the only
foreseeable exception to this will be to manage factors.

There are potential issues if the timezone of the data does not match
the timezone of the browser because in JavaScript, a `Date` object has
access only to the timezone of the browser and UTC, whereas in R, we
have the potential to access a timezone database via the operating
system. The Vega-Lite `temporal` type is based on the JavaScript `Date`
type, so its access to timezone information is similarly limited.

There are workarounds, but they involve compromises.

### Potential future paths

One of the more interesting design choices so far is whether the
transformations should take place in R or be put into the Vega-lite
specification.

One option is that if the Vega-Lite specification would compute an
aggregation, we would instead do aggregation in R so that the resulting
htmlwidget has a much smaller data set.

The second option, the one we are currently in favor of, is to have the
Vega-Lite specification act as a component so that we can the change
data sets in and out of the Vega-Lite specification.

We are interested to know if we could approach this topic more
generally. That is, can we write a specification such that the
transformation is done *somewhere*? For example somewhere could be a
remote R session (using Shiny), a remote SQL database, or the JavaScript
client which is to say the browser.

Additionally, for other transformations, how can we translate an R
expression into a JS expression so as to potentially create a general
translation capability between, say, dplyr and a set of Vega-Lite
transformations?

#### What we can do now + what we will do next:

The first geom we implemented was `geom_point()`. We then moved to
`geom_bar()` which brought along `stat_count()`, `position_stack()` and
`position_fill()`, and `coord_flip()`.

We next hope to enable histograms by implementing `stat_bin()`, and
`geom_line()`, `facet_grid()` and `facet_wrap()`, and `geom_boxplot()`
following on the To-Do list.

### New features

Additionally, there are some new features set to be released with
Vega-Lite 4.0. As these capabilities are released in Vega-Lite, we
foresee implementing `geom_smooth()`, `geom_density()`,
`position_dodge()` and `position_jitter()`.
