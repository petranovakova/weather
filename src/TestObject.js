class TestObject {
    field; // patri objektu
    static field; // patri classe

    constructor(field) {
        this.field = field;
    }
}

const myFunction = () => {
    TestObject.field = "myStaticField"; // je sdileny pro vsechny obejkty, ktery vytvorim
    const obj = new TestObject("myInstanceField");

    console.log(TestObject.field, obj.field);

    const obj2 = new TestObject("myInstanceField2");
    console.log(TestObject.field, obj2.field);

    console.log(obj.field, obj2.field, "|dva ruzne objekty maji rozdilne fieldy");

    TestObject.field = "zmenenej"; // menim zase na urovni classy
    console.log(TestObject.field, obj2.field, "|statickej field je zmenenej na urovni classy");


    obj2.field = "nejakej nesmysl"; // zmenil jsem jen pro obj 2, obj zustava nezmenenej
    console.log(obj.field, obj2.field, "|dva ruzne objekty maji rozdilne fieldy"); // dva ruzne objekty maji rozdilne fieldy
};

export default myFunction;