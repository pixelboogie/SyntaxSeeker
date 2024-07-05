import { openai, supabase } from './config.js';

// User query about podcasts
const query = "Something peaceful and relaxing";
main(query);

// Bring all function calls together
async function main(input) {
  const embedding = await createEmbedding(input);
  const match = await findNearestMatch(embedding);
  console.log(match);
}

// Create an embedding vector representing the input text
async function createEmbedding(input) {
  const embeddingResponse = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input
  });
  return embeddingResponse.data[0].embedding;
}

// Query Supabase and return a semantically matching text chunk
async function findNearestMatch(embedding) {
  const { data } = await supabase.rpc('match_documents', {
    query_embedding: embedding,
    match_threshold: 0.50,
    match_count: 1
  });
  return data[0].content;
}