bar chart
================

``` r
library("ggvega")
library("ggplot2")
library("vegawidget")
```

The purpose of this document is to show how bar-chart examples can be
translated.

## “Simple” bar chart

The is the simplest bar chart we can imagine. On the `x`-axis, we have
the `class` of the car; on the `y`-axis we have the number of cars
(obsewrvations) in each class.

Also note that I have specified the `width` and `height` of the
*rendering* of the vegaspec; this is *not* part of the translation.

``` r
dev_gallery("barchart-mpg")
```

``` r
  ggplot(data = mpg, aes(x = class)) +
  geom_bar()
```

<div>

<table>

<tr style="border-width: 0px;">

<td style="border-width: 0px;">

<img src="bar-chart_files/barchart-mpg-gg.png" width="400"/>

</td>

<td style="border-width: 0px;">

<img src="bar-chart_files/barchart-mpg-vl.svg"/>

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
        "manufacturer": {
          "type": "nominal"
        },
        "model": {
          "type": "nominal"
        },
        "displ": {
          "type": "quantitative"
        },
        "year": {
          "type": "quantitative"
        },
        "cyl": {
          "type": "quantitative"
        },
        "trans": {
          "type": "nominal"
        },
        "drv": {
          "type": "nominal"
        },
        "cty": {
          "type": "quantitative"
        },
        "hwy": {
          "type": "quantitative"
        },
        "fl": {
          "type": "nominal"
        },
        "class": {
          "type": "nominal"
        }
      },
      "observations": [
        {
          "manufacturer": "audi",
          "model": "a4",
          "displ": 1.8,
          "year": 1999,
          "cyl": 4,
          "trans": "auto(l5)",
          "drv": "f",
          "cty": 18,
          "hwy": 29,
          "fl": "p",
          "class": "compact"
        }
      ]
    }
  },
  "layers": [
    {
      "data": "data-00",
      "geom": {
        "class": "GeomBar"
      },
      "geom_params": {
        "na.rm": false,
        "width": null
      },
      "mapping": {
        "x": {
          "field": "class"
        }
      },
      "aes_params": {},
      "stat": {
        "class": "StatCount",
        "default_aes": {
          "y": {
            "stat": "count"
          },
          "weight": 1
        }
      },
      "stat_params": {
        "na.rm": false,
        "width": null
      },
      "position": {
        "class": "PositionStack"
      }
    }
  ],
  "scales": [],
  "labels": {
    "x": "class",
    "y": "count",
    "weight": "weight"
  },
  "coordinates": {
    "class": "CoordCartesian"
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
        "manufacturer": "audi",
        "model": "a4",
        "displ": 1.8,
        "year": 1999,
        "cyl": 4,
        "trans": "auto(l5)",
        "drv": "f",
        "cty": 18,
        "hwy": 29,
        "fl": "p",
        "class": "compact"
      }
    ]
  },
  "layer": [
    {
      "data": {
        "name": "data-00"
      },
      "mark": {
        "type": "bar"
      },
      "encoding": {
        "x": {
          "field": "class",
          "type": "nominal",
          "title": "class"
        },
        "y": {
          "aggregate": "count",
          "type": "quantitative",
          "title": "count"
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
