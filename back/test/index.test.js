const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', () => {
  describe('GET /rickandmorty/character/:id', () => {
    it('Responde con status: 200', async () => {
      await agent.get('/rickandmorty/character/1').expect(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const { body } = await agent.get('/rickandmorty/character/1');
      expect(body).toHaveProperty(
        'id' &&
          'name' &&
          'species' &&
          'gender' &&
          'status' &&
          'origin' &&
          'image'
      );
    });
    it('Si hay un error responde con status: 404', async () => {
      await agent.get('/rickandmorty/character/9000').expect(404);
    });
  });

  describe('GET /rickandmorty/login', () => {
    it('Responde según las credenciales correctas', async () => {
      const { body } = await agent.get(
        '/rickandmorty/login?email=alejo@mail.com&password=hola123'
      );
      expect(body).toEqual({
        access: true,
      });
    });
    it('Responde según las credenciales incorrectas', async () => {
      const { body } = await agent.get(
        '/rickandmorty/login?email=pepito@mail.com&password=hola321'
      );
      expect(body.access).toBeFalsy();
    });
  });

  describe('POST /rickandmorty/fav', () => {
    const character1 = {
      id: 1,
      name: 'Ale',
    };

    const character2 = {
      id: 2,
      name: 'Maria',
    };

    it('Devuelve el personaje creado', async () => {
      const { body } = await agent.post('/rickandmorty/fav').send(character1);
      expect(body).toContainEqual(character1);
    });

    it('Devuelve todos los personajes creados', async () => {
      const { body } = await agent.post('/rickandmorty/fav').send(character2);
      expect(body).toContainEqual(character1, character2);
    });
  });

  describe('DELETE /rickandmorty/fav/:id', () => {
    it('Debe devolver el arreglo si el id no se encuentra', async () => {
      const { body } = await agent.delete('/rickandmorty/fav/3');
      expect(body).toEqual([
        {
          id: 1,
          name: 'Ale',
        },
        {
          id: 2,
          name: 'Maria',
        },
      ]);
    });

    it('Elimina el personaje si el id es válido', async () => {
      const { body } = await agent.delete('/rickandmorty/fav/1');
      expect(body).toEqual([
        {
          id: 2,
          name: 'Maria',
        },
      ]);
    });
  });
});
