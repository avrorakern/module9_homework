const parser = new DOMParser();

const list = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
`;

const list2 = `  
<list>
<student>
<name lang="ru">
  <first>Петр</first>
  <second>Петров</second>
</name>
<age>58</age>
<prof>driver</prof>
</student>
</list>
`;

const xmlDOM = parser.parseFromString(list, 'text/xml');

const listNode = xmlDOM.querySelector('list');
const studentNode = listNode.querySelector('student');
const nameNode = studentNode.querySelector('name');
const firstNode = nameNode.querySelector('first');
const secondNode = nameNode.querySelector('second');
const ageNode = studentNode.querySelector('age');
const profNode = studentNode.querySelector('prof');

const langAttr = nameNode.getAttribute('lang');

const xmlDOM2 = parser.parseFromString(list2, 'text/xml');

const listNode2 = xmlDOM2.querySelector('list');
const studentNode2 = listNode2.querySelector('student');
const nameNode2 = studentNode2.querySelector('name');
const firstNode2 = nameNode2.querySelector('first');
const secondNode2 = nameNode2.querySelector('second');
const ageNode2 = studentNode2.querySelector('age');
const profNode2 = studentNode2.querySelector('prof');

const langAttr2 = nameNode2.getAttribute('lang');


const result = [{
    name: `${firstNode.textContent} ${secondNode.textContent}`,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr
}, 
{
    name: `${firstNode2.textContent} ${secondNode2.textContent}`,
    age: Number(ageNode2.textContent),
    prof: profNode2.textContent,
    lang: langAttr2
}]

const list3 = {
    list: result
};



console.log('list:', list3);