var users = [
    { name: '太郎' },
    { name: '次郎', id: 1 },
    { name: '三郎' },
    { name: '次郎', id: 2 }
];

var user = users.find(function (user) {
    return user.name === '次郎';
});

console.log(user);


function Car(model) {
    this.model = model;
}

var cars = [
    new Car('プリウス'),
    new Car('エスティマ'),
    new Car('アクア')
];

var es = cars.find(function (car) {
    return car.model === 'エスティマ';
});

console.log(es);

var posts = [
    { id: 1, title: '古い投稿' },
    { id: 2, title: '新しい投稿' }


];
var comment = { postId: 2, content: 'イイネ！' };

function postForComment(posts, commnet) {
    return posts.find(function(post) {
        return post.id === comment.postId;
    });
}

console.log(postForComment(posts, comment));

var ladderes = [
    {id:1, heigth: 20},
    {id:3, heigth: 25}
];

function findWhere(array, criteria) {
    return array.find(function(element) {

        var key = Object.keys(criteria)[0]
        return criteria[key] === element[key];
    });
}

console.log(findWhere(ladderes, { heigth: 25 }));