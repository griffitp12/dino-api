
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
          comments: 'It looks like a bird!'
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
        },
        {
          name: 'Micropachycephalosaurus',
          eats: 'Plants',
          size: 'Small',
          comments: "It's small...I think I wanna do a different one."
        },
        {
          name: 'Pachycephalosaurus',
          eats: 'Plants',
          size: 'Big',
          comments: 'It has a shell and it has like...like these kind of things'
        },
        {
          name: 'Rebbachisaurus',
          eats: 'Plants',
          size: 'Gigantic',
          comments: "I like it!"
        },
        {
          name: 'Spinosaurus',
          eats: 'Meat',
          size: 'Giant',
          comments: "I also like it. It's big and it's really big."
        },
        {
          name: 'Stegosaurus',
          eats: 'Plants',
          size: 'Big',
          comments: "I like it when it has spikes."
        },
        {
          name: 'Styracosaurus',
          eats: 'Plants',
          size: 'Big',
          comments: "It has spikes...horns. No, spikes. Horns! Actually, that's all."
        },
        {
          name: 'T. Rex',
          eats: 'Meat',
          size: 'Giant',
          comments: "I like T. Rexes"
        },
        {
          name: 'Triceratops',
          eats: 'Plants',
          size: 'Big',
          comments: "I like it. That's all."
        },
        {
          name: 'Utahraptor',
          eats: 'Meat',
          size: 'Big',
          comments: "It has a nail on it's feet."
        }
      ]);
    });
};
