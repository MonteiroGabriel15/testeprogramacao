function groupByCategory(items) {
    const groupedItems = {};
    items.forEach(item => {
        const category = item.category;
        if (!groupedItems[category]) {
            groupedItems[category] = [item];
        } else {
            groupedItems[category].push(item);
        }
    });

    return groupedItems;
}

const items = [
  { name: 'Devin Booker', category: 'Player' },
  { name: 'Jason Kidd', category: 'Coach' },
  { name: 'Lebron James', category: 'Player' },
  { name: 'Mike DAntoni', category: 'Coach' }
];

const result = groupByCategory(items);
console.log(result);