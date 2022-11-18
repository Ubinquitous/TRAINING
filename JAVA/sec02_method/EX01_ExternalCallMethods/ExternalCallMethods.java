package sec02_method.EX01_ExternalCallMethods;

class C {
    void print(){
        System.out.println("안녕");
    }
    int data(){
        return 3;
    }
    double sum(int a, double b){
        return a + b;
    }
    void printMouth(int m){
        if(m < 0 || m > 12){
            System.out.println("잘못된 입력");
            return;
        }
        System.out.println(m + "월입니다.");
    }
}

public class ExternalCallMethods {
    public static void main(String[] args) {
        C a = new C();
        a.print();
        int k = a.data();
        a.data();
        System.out.println(k);
        double result = a.sum(3, 5.2);
        System.out.println(result);
        a.printMouth(5);
        a.printMouth(15);
    }
}
