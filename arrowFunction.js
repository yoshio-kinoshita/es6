const add = (a, b) => {
    return a + b;
}

console.log(add(1, 2));

const double = number => 2 * number;

console.log(double(8));

const numbers = [1, 2, 3];

let result = numbers.map(number => 2 * number);
console.log(result);

const team = {
    members: ['taro', 'hanako'],
    teamName: 'super team',

    teamSummary: function() {
        const self = this;
        return this.members.map(function(member) {
            return `${member}は${self.teamName}の所属です。`;
        });
    }
}

console.log(team.teamSummary());

const team2 = {
    members: ['taro', 'hanako'],
    teamName: 'super team',

    teamSummary: function() {
        return this.members.map((member) => {
            return `${member}は${this.teamName}の所属です。`;
        });
    }
}

console.log(team2.teamSummary());

const fibonacci = (n) => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const profile = {
    name: '太郎',
    getName: function() {
        return this.name;
    }
};

console.log(profile.getName());