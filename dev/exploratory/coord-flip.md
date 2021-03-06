CoordFlip
================

``` r
library("ggvega")
library("ggplot2")
library("vegawidget")
```

The idea with `CoordFlip` is that for every (intermediate) layer, for
every encoding in the layer:

  - an aesthetic whose name begins with an `x` has the (first) `x` in
    its name replaced with a `y`.
  - an aesthetic whose name begins with a `y` has the (first) `y` in its
    name replaced with an `x`.

It may also be necessary to change the class of the encodings from
`VL.XClass` to `VL.YClass`, and vice-versa.

``` r
ggplot(iris, aes(x = Sepal.Width, y = Sepal.Length)) +
  geom_point(aes(color = Species)) +
  coord_flip()
```

<div>

<table>

<tr style="border-width: 0px;">

<td style="border-width: 0px;">

<img src="coord-flip_files/scat-coord-flip-iris-gg.png" width="400"/>

</td>

<td style="border-width: 0px;">

<img src="coord-flip_files/scat-coord-flip-iris-vl.svg"/>

</td>

</tr>

</table>

</div>

<div>

<details>

<summary>JSON specifications</summary>

<table>

<thead>

<tr style="border-width: 0px;">

<td style="width:50%; border-width: 0px;">

ggspec

</td>

<td style="width:50%; border-width: 0px;">

vegaspec

</td>

</tr>

</thead>

<tbody>

<tr style="border-width: 0px;">

<td style="border-width: 0px; vertical-align: top;">

``` json
{
  "data": {
    "data-00": {
      "metadata": {
        "Sepal.Length": {
          "type": "quantitative"
        },
        "Sepal.Width": {
          "type": "quantitative"
        },
        "Petal.Length": {
          "type": "quantitative"
        },
        "Petal.Width": {
          "type": "quantitative"
        },
        "Species": {
          "type": "nominal",
          "levels": [
            "setosa",
            "versicolor",
            "virginica"
          ]
        }
      },
      "observations": [
        {
          "Sepal.Length": 5.1,
          "Sepal.Width": 3.5,
          "Petal.Length": 1.4,
          "Petal.Width": 0.2,
          "Species": "setosa"
        }
      ]
    }
  },
  "layers": [
    {
      "data": "data-00",
      "geom": {
        "class": "GeomPoint"
      },
      "geom_params": {
        "na.rm": false
      },
      "mapping": {
        "x": {
          "field": "Sepal.Width"
        },
        "y": {
          "field": "Sepal.Length"
        },
        "colour": {
          "field": "Species"
        }
      },
      "aes_params": {},
      "stat": {
        "class": "StatIdentity"
      },
      "stat_params": {
        "na.rm": false
      }
    }
  ],
  "scales": [],
  "labels": {
    "x": "Sepal.Width",
    "y": "Sepal.Length",
    "colour": "Species"
  },
  "coordinates": {
    "class": "CoordFlip"
  },
  "facet": {
    "class": "FacetNull"
  }
}
```

</td>

<td style="border-width: 0px; vertical-align: top;">

``` json
{
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
  "datasets": {
    "data-00": [
      {
        "Sepal.Length": 5.1,
        "Sepal.Width": 3.5,
        "Petal.Length": 1.4,
        "Petal.Width": 0.2,
        "Species": "setosa"
      }
    ]
  },
  "layer": [
    {
      "data": {
        "name": "data-00"
      },
      "mark": {
        "type": "point"
      },
      "encoding": {
        "y": {
          "field": "Sepal\\.Width",
          "type": "quantitative",
          "title": "Sepal.Width"
        },
        "x": {
          "field": "Sepal\\.Length",
          "type": "quantitative",
          "title": "Sepal.Length"
        },
        "stroke": {
          "field": "Species",
          "type": "nominal",
          "title": "Species"
        }
      }
    }
  ]
}
```

</td>

</tr>

</tbody>

</table>

</details>

</div>
