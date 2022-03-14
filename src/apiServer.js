import { createServer, Model } from 'miragejs';

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

        return {
          score: data.score,
        };
      });
    },
  });
}
