// This "grammar" was taken from https://github.com/agda/agda-github-syntax-highlighting
// Shiki does not seem to like the match on lines 39-50
// I can probably fix this by comparing with https://github.com/shikijs/textmate-grammars-themes/tree/main/packages/tm-grammars/grammars
// Alternatively look at https://mzhang.io/posts/2024-06-26-agda-rendering/
export default {
  scopeName: "source.agda",
  name: "Agda",
  fileTypes: ["agda"],
  patterns: [
    {
      begin: "--",
      end: "$",
      name: "comment.line.double-dash.agda",
    },
    {
      begin: "{-[^#]",
      end: "-}",
      name: "comment.block.agda",
    },
    {
      begin: "{-#",
      end: "#-}",
      name: "support.other.agda",
    },
    {
      begin: '"',
      end: '"',
      name: "string.quoted.double.agda",
    },
    {
      match: "'([^\\\\']|\\\\['\\\\\"[:alnum:]]+)'",
      name: "constant.char.agda",
    },
    {
      match:
        "(?<=^|[[:space:]\\(\\){}])(-?\\d+|0x[0-9A-F]+|-?\\d+\\.\\d+((e|E)(\\+|-)?\\d+)?|-?\\d+(e|E)(\\+|-)?\\d+)(?=[[:space:]\\(\\){}])",
      name: "constant.numeric.agda",
    },
    {
      match:
        '\\b(data|record|module|constructor|open *import|open|import)[[:space:]]+([^;\\(\\){}@"[:space:]]+)',
      captures: {
        1: {
          name: "keyword.other.agda",
        },
        2: {
          name: "entity.name.type.agda",
        },
      },
    },
    {
      match:
        '((?<=^|[.;\\(\\){}@"[:space:]])\\?(?=[.;\\(\\){}@"[:space:]])|{!.*!})',
      name: "entity.name.tag.agda",
    },
    {
      match:
        "\\b(Set|Prop)[0123456789₀₁₂₃₄₅₆₇₈₉]*(?=$|[[:space:]\\(\\)\\{\\}])",
      name: "constant.language.agda",
    },
    {
      match:
        "(?<=^|[[:space:]\\(\\)\\{\\}])(λ|→|->|∀|=|←|:)(?=[[:space:]\\(\\)\\{\\}])",
      name: "keyword.other.agda",
    },
    {
      match:
        '^[[:space:]]*(((abstract|instance|macro|pattern|postulate|primitive|private|syntax|variable|where|let)[[:space:]]+)*)((([^;\\(\\){}@"[:space:]]+)[[:space:]]+)+)(?=:)',
      captures: {
        1: {
          name: "keyword.other.agda",
        },
        4: {
          name: "entity.name.agda",
        },
      },
    },
    {
      name: "keyword.other.agda",
      match:
        "(?<=^|[[:space:]\\(\\){}])(abstract|constructor|data|do|eta-equality|field|forall|hiding|import|in|inductive|infix|infixl|infixr|instance|let|macro|module|mutual|no-eta-equality|open|overlap|pattern|postulate|primitive|private|public|quote|quoteContext|quoteGoal|quoteTerm|record|renaming|rewrite|syntax|tactic|unquote|unquoteDecl|unquoteDef|using|variable|where|with)(?=$|[[:space:]\\(\\){}])",
    },
  ],
};
