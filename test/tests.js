// import functions under test
import { getDog } from '../fetch-utils.js';
const test = QUnit.test;

test('testing for dog by id', async (expect) => {
    // Arrange
    const expected = {
        body: {
            age: 5,
            breed_id: 1,
            created_at: '2021-11-18T22:50:36+00:00',
            description:
                'Borkf I am bekom fat snoot shoober tungg, mlem what a nice floof noodle horse. Heckin good boys you are doin me a concern many pats long woofer wrinkler dat tungg tho blop, big ol adorable doggo tungg fluffer. Puggo thicc length boy such treat, thicc. Length boy h*ck yapper tungg blop, woofer borkdrive smol. Maximum borkdrive such treat porgo you are doing me the shock maximum borkdrive, I am bekom fat thicc.',
            id: 2,
            name: 'Boogie',
        },
        count: null,
        data: {
            age: 5,
            breed_id: 1,
            created_at: '2021-11-18T22:50:36+00:00',
            description:
                'Borkf I am bekom fat snoot shoober tungg, mlem what a nice floof noodle horse. Heckin good boys you are doin me a concern many pats long woofer wrinkler dat tungg tho blop, big ol adorable doggo tungg fluffer. Puggo thicc length boy such treat, thicc. Length boy h*ck yapper tungg blop, woofer borkdrive smol. Maximum borkdrive such treat porgo you are doing me the shock maximum borkdrive, I am bekom fat thicc.',
            id: 2,
            name: 'Boogie',
        },
        error: null,
        status: 200,
        statusText: '',
    };

    // Act
    const actual = await getDog(2);

    // Assert
    expect.deepEqual(actual, expected, 'getting dog 2');
});
