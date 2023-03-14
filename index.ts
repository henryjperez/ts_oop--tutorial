console.log("Typescript Classes INIT");
/* -------------------------------------------- */
/*            it will run al the code of the imported file          */
/* -------------------------------------------- */
// import { a, } from "./17.typescript.ts";
// console.log("Import / Export variable a:", a);




/* ------------- Basic declaration ------------ */
export class A {
	a1: string;
	a2: number;
	a3: boolean;

	constructor(a1: string, a2: number, a3: boolean) {
		this.a1 = a1;
		this.a2 = a2;
		this.a3 = a3;
	}
}
const aa = new A("New Class", 1, true);
console.log("Basic declaration:", aa);

/* --------------- With methods --------------- */
class B {
	b1: string;
	b2: number;
	b3: boolean;

	constructor(b1: string, b2: number, b3: boolean) {
		this.b1 = b1;
		this.b2 = b2;
		this.b3 = b3;
	}

	run(time: "all day" | "just the mornings" | "anytime"): void {
		console.log(`I'm running ${time}, so you have this: ${this.b1} times ${this.b2} and it's ${this.b3}`);
	}
}
const bb = new B("Power", 59, true);
console.log("B class:", bb);
bb.run("all day");

/* --------------- Encapsulation -------------- */
class C {
	c0: any // public by default
	public c1: null | number;
	private _c2: boolean | string;
	readonly c3: string;
	protected _c4: string;

	constructor({ c1, c2, c3, c4 }: { c1: null | number, c2: boolean, c3: string, c4: string, }) {
		this.c0 = "Whatever";
		this.c1 = c1;
		this._c2 = c2;
		this.c3 = c3;
		this._c4 = c4;
	}

	get c2() {
		return `Mr. C2 says that  it's value is: ${this._c2}. Now you can go, please`;
	}
	set c2(newValue: boolean | string) {
		// this.c3 = "Nope, still not changing"; // it will change the value, but the idea is to listen to typescript
		this._c2 = newValue;
	}

	set c4(newValue: string) {
		this._c4 = newValue;
	}

}
const cc = new C({ c1: null, c2: false, c3: "You can only see me, not modify me", c4: "Only the class can make me change and it's children" });
console.log("Encapsulation with class:", cc);

cc.c0 = "I'm public, whatever";
cc.c1 = 975;
// cc._c2 = true; // it will change the value, but the idea is to listen to typescript
cc.c2 = "VIP";
// cc.c3 = "Time to change... hahaha, not really"; // it will change the value, but the idea is to listen to typescript
// cc._c4 = "I told you, only the class can change me, not you"; // it will change the value, but the idea is to listen to typescript
cc.c4 = "Oh, well, if you say it please.... okey, let's go";

console.log("After changes:", cc)
console.log(cc.c2)
console.log(cc.c3)
// console.log(cc._c4) // it will display the value, but the idea is to listen to typescript


/* ------------- Short constructor ------------ */
class D {
	constructor(
		// d0: any // you need to add the type of access: public, private, etc
		public d1: number,
		private d2: boolean,
		readonly d3: string,
		protected d4: number = 888,
	) { }

	d5(): void {
		console.log("Just logging");
	}
}
const dd = new D(13, true, "Reading...", /* 99 */);
console.log("Short constructor", dd);



/* ---------------- Inheritance --------------- */
console.group('inheritance')
class E {
	constructor(
		public e1: number,
		private e2: string = "Hi, I'm VIP",
		protected e3: string = "Hello, I'm can be used be the inheritance",
	) { }

	e4() {
		console.log("%c Here, just doing some Class E stuff", "color: pink; background-color: black",);
	}
}
class F extends E {
	constructor(
		e1: number, // for the super class don't put the access type (public, private, etc)
		public f1: number,
	) {
		super(e1);
	}

	f2() {
		console.log(`Super thing 1 ${this.e1}`);
		// console.log(`Super thing 2 ${this.e2}`); // privates can be extended to the children
		console.log(`Super thing 3 ${this.e3}`);

		super.e4();
	}
}

const ee = new E(2000);
const ff = new F(2501, 3000);
console.log(ee);
console.log(ff);
ff.f2();
// class G extends A, B, C, D, {} // it can only extend 1 class at the time
console.groupEnd()

/* ------------------ Statics ----------------- */
class G {
	constructor(
		public gg = "Good game, gg",
	) { }

	static g = "gg, GG, gg";
	static ggGGgg() {
		console.log(`By the way, gg. ${this.gg}. Woops, I forgot that you need to initialize my first, unless... ${this.g}...`);
	}
}
G.ggGGgg();
console.log(G.g)


/* ----------------- Abstract ----------------- */
// when a class is too general
// and you don't want to allow instance of that class
// but you still want to inherict
// then you can that's an abstract class
interface ILiving {
	name: string;
	exists(): void;
}
abstract class LivingThing implements ILiving {
	constructor(
		public name: string = "perrito",
	) { }

	exists(): void {
		console.log("Existing");
	}
}
// const livingThing = new LivingThing("Bicho");
// console.log("Living thing", livingThing) // you can instantiate that, but just follow the rules so you don't get too complicated
class Dog extends LivingThing {
	constructor(
		name: string,
		public power: string,
	) {
		super(name);
	}

	move(): void {
		console.log("Moving using 4 legs");
	}
}
const dog = new Dog("Perrito", "Perfection");
console.log("Extending from abstract class", dog);
dog.exists();
dog.move();

/* ---------------- Interfaces ---------------- */
interface H {
	h1: number;
	h2(): number;
}
interface I {
	i1: string;
	i2: ILiving;
}
interface J extends H, I {
	j1: boolean;
}

class K implements H, I, J { // in this example implementing "H" and "I" are optionals since "J" already does that
	constructor(
		public h1: number,

		public i1: string,
		public i2: ILiving,

		public j1: boolean,
	) {}

	h2() {
		return 66;
	}
}
const kk = new K(44, "Welcome", dog, true);
console.log("Interfaces and classes =>", kk)




console.log("Typescript Classes ENDs");