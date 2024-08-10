# SyntaxSeeker

## Description
**SyntaxSeeker** is a project developed as part of the "Learn Embeddings and Vector Databases" course on Coursera. The project demonstrates how to create and utilize embeddings with vector databases, particularly focusing on storing and querying embeddings in Supabase, a Postgres database that supports pgvector for vector storage and comparisons. The project also leverages Langchain for text chunking and OpenAI's API for generating embeddings and providing conversational responses.

This project was originally coded in Scrimba, so there may be additional setup required to get it working locally.

## Technologies Used
- **Scrimba**: An interactive coding platform where the project was developed.
- **Supabase**: A database supporting Postgres and pgvector for storing and querying embeddings.
- **Langchain**: Used for recursive text splitting and chunking text.
- **OpenAI**: For generating embeddings and conversational AI responses.
- **JavaScript**: The primary programming language used in the project.

## Installation
To set up this project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/SyntaxSeeker.git

   cd SyntaxSeeker


2. **Install Dependencies:**

    Ensure that you have Node.js installed, and then install the required packages:

        npm install

3. **Set Up Environment Variables:**
Create a .env file in the project root directory and add your API keys for OpenAI and Supabase:

        OPENAI_API_KEY=your_openai_api_key_here
        SUPABASE_URL=your_supabase_url_here
        SUPABASE_KEY=your_supabase_key_here

4. **Run the Application:**
Start the application using the following command:

        node main.js

## Usage ##
Once the application is running, you can query the database by providing an input related to a podcast. The system will generate an embedding for the query, search for the most relevant content in the Supabase database, and then use OpenAI's API to generate a conversational response based on the context.

## Example Code ##
Here is a brief overview of the key functions in the main.js file:

- createEmbedding(input): Creates an embedding vector representing the input text using OpenAI's API.
- findNearestMatch(embedding): Queries Supabase to find the most semantically matching text chunk based on the provided embedding.
- getChatCompletion(text, query): Uses OpenAI to generate a conversational response based on the retrieved text and the user's query.

Example code snippet:

    import { openai, supabase } from './config.js';

    const query = "Something peaceful and relaxing";
    main(query);

    async function main(input) {
    const embedding = await createEmbedding(input);
    const match = await findNearestMatch(embedding);
    await getChatCompletion(match, input);
    }

## License ##
This project is licensed under the MIT License. See the LICENSE file for more information.

