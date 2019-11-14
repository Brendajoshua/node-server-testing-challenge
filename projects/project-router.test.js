const request = require('supertest');

const db = require('../data/db-config');
const Projects = require('./project-model');

const server = require('../server');

describe('project-router', () => {
  beforeEach(async () => {
    await db('projects').truncate();
  });

  describe('GET /api/projects', () => {
    it('responds with 200 OK', async () => {
      const res = await request(server).get('/api/projects');
      expect(res.status).toBe(200);
    });
  });

  describe('POST /api/projects', () => {
    it('should responds with 201 OK', async () => {
      await request(server)
        .post('/api/projects')
        .send({ name: 'new project' })
        .send({ name: 'paint house' })
        .then(res => {
          expect(res.status).toBe(500);
        });
    });
    it('should return with JSON', async () => {
      await request(server)
        .post('/api/projects')
        .send({ name: 'new project' })
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });

  describe('DELETE /api/projects/:id', () => {
    it('should respond with 200 OK', async () => {
      await Projects.insert({ name: 'new project' });

      await request(server)
        .delete('/api/projects/1')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it('should delete a project', async () => {
      await Projects.insert({ name: 'new project' });

      let projects = await db('projects');
      expect(projects).toHaveLength(1);

      await request(server).delete('/api/projects/1');

      projects = await db('projects');
      expect(projects).toHaveLength(0);
    });
  });
});