
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('dinos').del()
    .then(function () {
      // Inserts seed entries
      return knex('dinos').insert([
        {
          name: 'Apatosaurus',
          eats: 'Plants',
          size: 'Gigantic',
          comments: 'It has no anything.'
        },
        {
          name: 'Archaeopteryx',
          eats: 'Meat',
          size: 'Small',
          comments: 'It looks like a birtd!'
        },
        {
          name: 'Brachiosaurus',
          eats: 'Plants',
          size: 'Gigantic',
          comments: "Well there's a hole here."
        },
        {
          name: 'Iguanadon',
          eats: 'Plants',
          size: 'Giant',
          comments: "I like it. That's all."
        }
      ]);
    });
};
