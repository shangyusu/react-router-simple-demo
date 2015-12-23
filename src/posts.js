import faker from 'faker/locale/zh_TW';

const fakePosts = [];

for (let i = 0; i < 8; i++) {
  fakePosts.push({
    id: i + 1,
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraph()
  });
}

export default fakePosts;
