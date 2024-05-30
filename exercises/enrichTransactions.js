const enrichTransactions = (transactions, tags) => {
  const tagsObject = tags.reduce((prev, curr) => {
    const prevObj = { ...prev };
    const { tagId } = curr;
    prevObj[tagId] = { ...curr };

    return prevObj;
  }, {});

  return transactions.map((transaction) => {
    const { tags: transactionTags, ...rest } = transaction;

    const formatedTags = [];
    for (let i = 0; i < transactionTags.length; i += 1) {
      const tag = transactionTags[i];
      if (tagsObject[tag]) {
        formatedTags.push(tagsObject[tag]);
      }
    }

    return {
      tags: [...formatedTags],
      ...rest,
    };
  });
};

module.exports = enrichTransactions;
