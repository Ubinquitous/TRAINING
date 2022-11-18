package sec03_constructor.EX02_ConstructorOverloading;

class A {
    A(){
        System.out.println("first constructor");
    }
    A(int a){
        System.out.println("2nd ");
    }
    A(int a, int b){
        System.out.println("3rd");
    }
}

public class ConstructorOverloading {
    public static void main(String[] args) {
        A a1 = new A();
        A a2 = new A(3);
        A a3 = new A(3, 5);
    }
}
