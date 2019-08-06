#' Extract layers
#'
#' Extract necessary information from the ggplot layers object.
#'
#' @param layer_plt A `list` of layers from the ggplot object.
#' @param int_data An intermediate-form for the data created by `data_int()`.
#' @param int_map An intermediate-form for the mapping created by `mapping_spc()`.
#'
#' @return `list` of layers each with their layer components
#' @noRd
#'
#' @examples
#' library(ggplot2)
#' p <- ggplot(data = iris)
#' p <- p + geom_point(aes(x = Petal.Width, y = Petal.Length))
#' dat <-  data_int(p$data, p$layers)
#' maps <- mapping_spc(p$mapping)
#' layer_spc(p$layers, dat, maps)
layer_spc <- function(layer_plt, int_data, int_map) {
  purrr::map(layer_plt, get_layers, int_data, int_map)
}


#' Get layer information
#'
#' Extract necessary information from a single ggplot layer list element. Is called by `layer_spc()`.`
#'
#'
#' @param layer A single ggplot2 layer object.
#' @param int_data An intermediate-form for the data created by `data_int()`.
#' @param int_map An intermediate-form for the mapping created by `mapping_spc()`.
#'
#' @return `list` of layer components
#' @noRd
#'
#' @examples
#' library(ggplot2)
#' p <- ggplot(data = iris)
#' p <- p + geom_point(aes(x = Petal.Width, y = Petal.Length))
#' dat <-  data_int(p$data, p$layers)
#' maps <- mapping_spc(p$mapping)
#' get_layers(p$layers[[1]], dat, maps)
get_layers <- function(layer, int_data, int_map) {
  pluck_layer <- purrr::partial(purrr::pluck, .x = layer, .default = empty_named_list)

  layer_map = pluck_layer("mapping") %>% purrr::map(get_mappings)

  list(
    aes_params = pluck_layer("aes_params"),
    data = purrr::pluck(layer, "data") %>% get_data_name(int_data),
    geom = list(
      class = pluck_layer("geom", class, 1)
    ),
    geom_params = pluck_layer("geom_params"),
    mapping = pluck_layer("inherit.aes") %>% modify_mappings(int_map, layer_map),
    position = list(
      class = pluck_layer("position", class, 1)
    ),
    stat = list(
      class = pluck_layer("stat", class, 1),
      default_aes = pluck_layer("stat", "default_aes") %>% purrr::map(get_mappings),
      required_aes = pluck_layer("stat", "required_aes")
    ),
    stat_params = pluck_layer("stat_params")
  )
}


#' Modify mappings according to `inherit.aes` parameter
#'
#' @param inherit_aes `logical`
#' @param int_map An intermediate-form for the mapping created by `mapping_spc()`.
#' @param layer_map An internal intermediate-form for the mapping created in `get_layers()`.
#'
#' @return `list` of (possibly modified) mapping specifications
#' @noRd
#'
modify_mappings <- function(inherit_aes, int_map, layer_map) {

  if (!inherit_aes) {
    return(layer_map)
  }
  else{
    utils::modifyList(int_map, layer_map)
  }

}


#' Get name of data-frame
#'
#' @param layer_data `data.frame` (we will get this from a layer)
#' @param int_data `list`, "library" of available data frames
#'   (returned by `data_int()`)
#'
#' @return `character` something like `"data-00"`
#' @noRd
#'
#' @examples
#' library(ggplot2)
#' p <- ggplot(data = iris)
#' p <- p + geom_point(aes(x = Petal.Width, y = Petal.Length))
#' dat <- data_int(p$data, p$layers)
#' get_data_name(p$layers[[1]]$data, dat)
#'
get_data_name <- function(layer_data, int_data) {

  if (is.waive(layer_data) || is.null(layer_data)) {
    return("data-00")
  }

  # *named* character vector
  hash_int_data <- purrr::map_chr(int_data, purrr::pluck, "hash")

  hash_layer_data <- digest::digest(layer_data)

  # subset library to get match with layer
  hash_match <- hash_int_data[hash_int_data == hash_layer_data]

  # we want to return the name
  name_hash_match <- names(hash_match)

  name_hash_match
}







