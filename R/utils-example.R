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


