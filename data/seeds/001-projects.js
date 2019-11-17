
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').insert([
    { 
      name: 'run a marathon', 
      description: 'daily runs', 
      is_complete: false 
    },
    {
      name: 'write a book',
      description: 'submit drafts',
      is_complete: false,
    },
    {
      name: 'network',
      description: 'identify events',
      is_complete: false,
    },
    {
      name: 'set up rescue center',
      description: 'get stastics',
      is_complete: false,
    },
  ]);
};
