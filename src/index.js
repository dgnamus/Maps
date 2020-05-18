import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

let ages = {
  David: 27,
  Ana: 32,
  Urška: 31
};

console.log(`David is ${ages["David"]}`);
console.log(`Do we know how old is Ana?`, "Ana" in ages);
console.log("Is toStrings age known?", "toString" in ages);
//whaat?

//Because plain objects derive from Object.prototype, we have a property "toString" there

//It could pose a problem...

console.log("*************************");

//...luckily JS comes with a class called "Map" that is weitten for this exact purpose, it stores a mapping and allows any type of keys

let newAges = new Map();
newAges.set("David", 27);
newAges.set("Ana", 32);
newAges.set("Urška", 31);

console.log(`David is ${newAges.get("David")}`);
console.log(`Do we know how old is Ana?`, newAges.has("Ana"));
console.log("Is toStrings age known?", newAges.has("toString"));

//As you can see: set, get and has are part of the interface for the Map object.

//also, as the alternative to the in operator initally used, you can use the hasOwnProperty method, which ignores the object's prototype, as the name suggests
console.log("Is toStrings age known?", ages.hasOwnProperty("toString"));
//...il sucesso grande...
