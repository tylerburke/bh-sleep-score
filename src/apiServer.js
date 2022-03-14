import { createServer, Model, Response } from 'miragejs';

export default function () {
  createServer({
    models: {
      score: Model,
    },

    routes() {
      this.namespace = 'api';

      // Endpoint for saving a score
      this.post('save', (schema, request) => {
        let data = JSON.parse(request.requestBody);

        // Check for bad data before saving
        if (typeof data.score !== 'number' || data.score <= 0) {
          return new Response(400, {}, { errors: ['Invalid score'] });
        }

        // Save the score data in the mock database
        schema.scores.create(data);

        return {
          score: data.score,
        };
      });

      // Endpoint for retrieving all scores
      this.get('scores', (schema) => {
        return schema.scores.all();
      });
    },
  });
}
