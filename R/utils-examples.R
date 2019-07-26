# regular expressions for ggplot strings

regex_ggplot_data <- function() {

  # ggplot             - the word "ggplot"
  # \\s*               - optional whitespace
  # \\(\\s*            - open-parenthesis, optional whitespace
  # (?:data\\s*=\\s*)? - optional "data =" with whitespace, not captured
  # ([\\w\\.]+)        - one-or-more word or dot characters, captured (what we want)
  # .*                 - anything
  #
  "ggplot\\s*\\(\\s*(?:data\\s*=\\s*)?([\\w\\.]+).*"
}

regex_layer_data <- function() {

  # \\w+\\s*           - function-name, optional whitespace
  # \\(.*              - open-parenthesis, anything
  # (?:data\\s*=\\s*)  - "data =" with whitespace, not captured
  # ([\\w\\.]+)        - one-or-more word or dot characters, captured (what we want)
  # .*                 - anything
  "\\w+\\s*\\(.*(?:data\\s*=\\s*)([\\w\\.]+).*"
}
