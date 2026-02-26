import nlp from 'compromise';
import ngramsPlugin from 'compromise-ngrams';

(nlp as { extend: (p: unknown) => void }).extend(ngramsPlugin);

const stopWords = (): string[] => {
  return [
    'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and',
    'any', 'are', 'as', 'at', 'be', 'because', 'been', 'before', 'being', 'below',
    'between', 'both', 'but', 'by', 'can', 'could', 'did', 'do', 'does', 'doing',
    'down', 'during', 'each', 'few', 'for', 'from', 'further', 'had', 'has', 'have',
    'having', 'he', "he'd", "he'll", "he's", 'her', 'here', "here's", 'hers', 'herself',
    'him', 'himself', 'his', 'how', "how's", 'i', "i'd", "i'll", "i'm", "i've", 'if',
    'in', 'into', 'is', 'it', "it's", 'its', 'itself', "let's", 'me', 'more', 'most',
    'my', 'myself', 'not', 'nor', 'of', 'on', 'once', 'only', 'or', 'other', 'ought',
    'our', 'ours', 'ourselves', 'out', 'over', 'own', 'same', 'she', "she'd", "she'll",
    "she's", 'should', 'so', 'some', 'such', 'than', 'that', "that's", 'the', 'their',
    'theirs', 'them', 'themselves', 'then', 'there', "there's", 'these', 'they',
    "they'd", "they'll", "they're", "they've", 'this', 'those', 'through', 'to', 'too',
    'under', 'until', 'up', 'very', 'was', 'we', "we'd", "we'll", "we're", "we've",
    'were', 'what', "what's", 'when', "when's", 'where', "where's", 'which', 'while',
    'who', "who's", 'whom', 'why', "why's", 'with', 'would', 'you', "you'd", "you'll",
    "you're", "you've", 'your', 'yours', 'yourself', 'yourselves',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '&', '$',
  ];
};

interface NgramResult {
  normal: string;
  count?: number;
}

const getUnigrams = (text: string): NgramResult[] => {
  return nlp(text).unigrams();
};

export const filterUnigrams = (text: string): NgramResult[] => {
  const unigrams = getUnigrams(text);
  return unigrams.filter((gram: NgramResult) =>
    stopWords().every((word: string) => gram.normal !== word)
  );
};

const getBigrams = (text: string): NgramResult[] => {
  return nlp(text).bigrams();
};

export const filterBigrams = (text: string): NgramResult[] => {
  const bigrams = getBigrams(text);
  return bigrams.filter((gram: NgramResult) =>
    stopWords().every((word: string) => !gram.normal.split(' ').includes(word))
  );
};
