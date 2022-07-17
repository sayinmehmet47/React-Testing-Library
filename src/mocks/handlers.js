import { rest } from 'msw';

export const handlers = [
  rest.get('https://randomuser.me/api/', (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            gender: 'male',
            name: {
              title: 'Mr',
              first: 'Mehmet',
              last: 'Sayin',
            },
            location: {
              street: {
                number: 2769,
                name: 'Skivevej',
              },
              city: 'Nykøbing Sj.',
              state: 'Midtjylland',
              country: 'Denmark',
              postcode: 38857,
              coordinates: {
                latitude: '-43.8707',
                longitude: '-32.5464',
              },
              timezone: {
                offset: '-8:00',
                description: 'Pacific Time (US & Canada)',
              },
            },
            email: 'silas.andersen@example.com',
            login: {
              uuid: 'd024b865-206b-447e-87d5-59b5ae4eaea6',
              username: 'tinyfrog399',
              password: 'homemade',
              salt: 'idzTpE6s',
              md5: '3f29ff1520a00907188b39ab5d1c84ee',
              sha1: '9c01903aba1e463534c50c278cb79fecb3758b49',
              sha256:
                'd885bfa12cb1ecbfb9913d9dcce429f4d7a2646fe462dcb41c117280e1d6ec67',
            },
            dob: {
              date: '1976-10-31T01:10:52.139Z',
              age: 45,
            },
            registered: {
              date: '2016-06-28T00:07:32.889Z',
              age: 6,
            },
            phone: '69296963',
            cell: '36329294',
            id: {
              name: 'CPR',
              value: '301076-2304',
            },
            picture: {
              large: 'https://randomuser.me/api/portraits/men/34.jpg',
              medium: 'https://randomuser.me/api/portraits/med/men/34.jpg',
              thumbnail: 'https://randomuser.me/api/portraits/thumb/men/34.jpg',
            },
            nat: 'DK',
          },
        ],
      })
    );
  }),
];
