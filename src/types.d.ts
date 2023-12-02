export interface Quote {
  category: string;
  author: string;
  text: string;
}

export interface QuoteList {
  [id: string]: Quote;
}