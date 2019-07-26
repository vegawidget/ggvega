# regular expressions for ggplot strings

regex_ggplot_data <- function() {

  # ggplot             - the word "ggplot"
  # \\s*               - optional whitespace
  # \\(\\s*            - open-parenthesis, optional whitespace
  # (?:data\\s*=\\s*)? - optional "data =" with whitespace
  # ([\\w\\.]+)        - one-or-more word or dotcharacters, captured (what we want)
  # .*                 - anything
  #
  "ggplot\\s*\\(\\s*(?:data\\s*=\\s*)?([\\w\\.]+).*"
}

regex_layer_data <- function() {


}
