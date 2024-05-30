const enrichTransactions = require('../exercises/enrichTransactions');

const tags = [
  { tagId: 'tag-1', name: 'RENT' },
  { tagId: 'tag-2', name: 'TELECOM' },
  { tagId: 'tag-3', name: 'TRANSPORTATION' },
  { tagId: 'tag-4', name: 'FOOD' },
  { tagId: 'tag-5', name: 'BANK' },
  { tagId: 'tag-6', name: 'TAX' },
  { tagId: 'tag-7', name: 'LEGAL' },
];

const transactions = [
  {
    transactionId: 'transaction-1',
    tags: ['tag-1', 'tag-5'],
    currency: 'EUR',
    value: 100,
  },
  {
    transactionId: 'transaction-2',
    tags: [],
    currency: 'EUR',
    value: 1289,
  },
  {
    transactionId: 'transaction-3',
    tags: ['tag-7'],
    currency: 'EUR',
    value: 991,
  },
];

describe('enrichTransactions', () => {
  it('should enrich the list of transactions with tag information', () => {
    expect(enrichTransactions(transactions, tags)).toEqual([
      {
        transactionId: 'transaction-1',
        tags: [
          { tagId: 'tag-1', name: 'RENT' },
          { tagId: 'tag-5', name: 'BANK' },
        ],
        currency: 'EUR',
        value: 100,
      },
      {
        transactionId: 'transaction-2',
        tags: [],
        currency: 'EUR',
        value: 1289,
      },
      {
        transactionId: 'transaction-3',
        tags: [{ tagId: 'tag-7', name: 'LEGAL' }],
        currency: 'EUR',
        value: 991,
      },
    ]);
  });
});
