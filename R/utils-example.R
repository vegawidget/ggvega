# regular expressions for ggplot strings

regex_ggplot_data <- function() {

  # (                  - capture group
  # ggplot             - the word "ggplot"
  # \\s*               - optional whitespace
  # \\(\\s*            - open-parenthesis, optional whitespace
  # (?:data\\s*=\\s*)? - optional "data =" with whitespace, not captured
  # )
  #
  # ([\\w\\.]+)        - one-or-more word or dot characters, captured (what we want)
  #
  # (.*)               - anything, capture
  #
  "(ggplot\\s*\\(\\s*)(?:data\\s*=\\s*)?([\\w\\.]+)(.*)"
}

regex_layer_data <- function() {

  # (                  - capture group
  # ^\\s*              - beginning-of-string, optional whitespace
  # (?!ggplot)         - not the word "ggplot"
  # .*                 - anything (will contain function name)
  # \\(.*              - open-parenthesis, anything
  # data\\s*=\\s*      - "data =" with whitespace
  # )
  #
  # ([\\w\\.]+)        - one-or-more word or dot characters, captured (what we want)
  #
  # (.*)               - anything, capture
  #
  "(^\\s*(?!ggplot).*\\(.*data\\s*=\\s*)([\\w\\.]+)(.*)"
}

head_data <- function(x, n = 1L){
  # interpolate number of lines into replacement string
  repl <- glue::glue("\\1head(\\2, {n})\\3")

  x <- stringr::str_replace(x, regex_ggplot_data(), repl)
  x <- stringr::str_replace(x, regex_layer_data(), repl)

  x
}



# return the names of all the examples
.example_names <- function(type = c("ggplot", "ggspec", "vegaspec"),
                           source = c("dev", "pkg")) {

  # get the directory
  dir <- .example_dir(type, source)

  # get the filenamea, basenames, remove the extensions
  f <- fs::dir_ls(dir, regexp = "[.]R$")
  f <- basename(f)
  f <- tools::file_path_sans_ext(f)

  f
}

# return the root directory that contain examples
.example_dir <-  function(type = c("ggplot", "ggspec", "vegaspec"),
                          source = c("dev", "pkg")) {
  # validate arguments
  type <- match.arg(type)
  source <- match.arg(source)

  # create according to the source
  if (identical(source, "pkg")) {
    # use the installed-package
    dir <- system.file("examples", package = "ggvega")
  } else {
    # use the development data-raw
    if (!requireNamespace("here", quietly = TRUE)) {
      stop("need {here} package")
    }

    dir <- here::here("data-raw", "examples")
  }

  # append the type
  dir <- fs::path_join(c(dir, type))

  dir
}

# return the path to examples
.example_path <- function(example,
                          type = c("ggplot", "ggspec", "vegaspec"),
                          source = c("dev", "pkg")) {

  names <- .example_names(type, source)
  dir <- .example_dir(type, source)

  if (!(example %in% names)) {
    message(glue::glue_collapse(names, sep = "\t"))
    stop("example not found", call. = FALSE)
  }

  fs::path_join(c(dir, glue::glue("{example}.R")))
}

# return the object the example builds
# return the path to examples
.example_obj <- function(example,
                         type = c("ggplot", "ggspec", "vegaspec"),
                         source = c("dev", "pkg")) {

  path <- .example_path(example, type, source)

  source(path)$value
}
