---
title: "The Pizza Problem – Concurrent Programming"
slug: "the-pizza-problem-concurrent-programming"
date: "2017-06-21"
updated: "2017-06-22"
sourceUrl: "https://vijinimallawaarachchi.com/2017/06/21/the-pizza-problem-concurrent-programming/"
featuredImage: "/blog-images/the-pizza-problem-concurrent-programming/pizza-problem-cover.png"
categories: ["Concurrent Programming", "Java", "Threads"]
tags: ["Concurrent Programming", "Condition Variables", "Locks", "Pizza Problem"]
---
A group of students are studying for an exam. The students can study only while eating pizza. Each student executes the following loop:

```text
while (true) {

    pick up a slice of pizza;

    study while eating the pizza;

}

```

If a student finds that the pizza is gone, the student goes to sleep until another pizza arrives. The first student to discover that the group is out of pizza calls Kamal’s Pizza to order another pizza before going to sleep. Each pizza has **S** slices. Once Kamal delivers pizza, he wake up all the students in the group. Then the students pick up a slice of pizza and go back to studying, and the process continues.

Write code to synchronize the student threads and the Kamal’s pizza delivery thread.

Your solution should avoid deadlock and call Kamal’s Pizza (i.e., wake up the delivery thread) exactly once each time a pizza is exhausted. No slice/piece of pizza may be consumed by more than one student.

## Solution

```java
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import static java.lang.Thread.sleep;
import java.util.Random;

/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/

/**
*
* @author Vijini
*/

public class PizzaProblem {

public static void main(String[] args) {
StudyGroup studyGroup = new StudyGroup();   //Create student group
int students = 6;

for (int i = 0; i  0) {
–slices;                   //Decrease no. of slices. Student picks up a slice of pizza.
//Student takes a slice and starts studying
System.out.println("Student " + Thread.currentThread().getId() + " took a slice of pizza and is studying");
} else {
if (firstToSee) {
//First student to see that the group is out of pizza
System.out.println("Group out of pizza. Student " + Thread.currentThread().getId() + " calls Kamal's Pizza");
orderPizza.signal();        //Call Kamal's Pizza and wake up delivery thread
firstToSee = false;
}
System.out.println("Student " + Thread.currentThread().getId() + " sleeps");
deliverPizza.await();           //Student sleeps till pizza is delivered
}
mutex.unlock();

}

void checkOrder() throws InterruptedException {
mutex.lock();
slices = S;                         //Fill plate with new pizza
System.out.println("Pizza delivered");
firstToSee = true;
System.out.println("Wake up sleeping students\n");
deliverPizza.signalAll();           //Wake up all sleeping Students
orderPizza.await();                 //PizzaDelivery goes to sleep
mutex.unlock();

}
}

//Pizza Delivery class
class PizzaDelivery extends Thread{

private StudyGroup studyGroup = new StudyGroup();

public PizzaDelivery(StudyGroup sg) {
this.studyGroup = sg;
}

@Override
public void run(){
while (true) {
try {
studyGroup.checkOrder();
sleep(5000);                        //Wait till pizza is delivered
} catch (InterruptedException ex) {
ex.printStackTrace();
}
}
}
}

//Student class
class Student extends Thread{

StudyGroup studyGroup = new StudyGroup();
private Random r = new Random();

public Student(StudyGroup sg) {
this.studyGroup = sg;
}

@Override
public void run(){
while (true) {
try {
studyGroup.beginStudying();
sleep(r.nextInt(10000));            //Wait till pizza slice finishes
} catch (InterruptedException ex) {
ex.printStackTrace();
}
}
}
}

```

## Discussion

If a student finds that the pizza is gone, the student goes to sleep until another pizza arrives. Once the pizza is delivered, the delivery person should wake up all the sleeping students. In order to simulate this behaviour, we have to use a special type of construct named **Condition Variable**.

### What are Condition Variable?

Condition variables allow to check for a condition, and makes a thread wait until the condition is satisfied. When the condition is satisfied, it will wake up the sleeping thread. There is a special method to broadcast and wake up all the sleeping threads as well.

In Java, you can create conditions using the **newCondition** method of the Lock (lines 41 and 42). A condition is a variable of type **Condition**. You can make the current thread wait on the condition using the **await()** method and you can signal threads using **signal()** and **signalAll()** methods. The **signalAll()** method wakes up all the threads waiting on the condition variable.

### What happens in the code?

In the code given above, if a Student thread sees that the slice count is zero, it should go to sleep. This is done at line 60; **deliverPizza.await()**.

The first student to see that the slice count is zero, wakes up the pizza delivery thread. This is done at line 56; **orderPizza.signal()**. Then he goes to sleep like other students at line 60.

Once pizza is delivered and the plate is full, the pizza delivery thread wakes up all the sleeping student threads. This is done at line 72; **deliverPizza.signalAll()**. This is a broadcast signal for all the student threads to wake up.

## Resources

You can find the complete organised solution in my GitHub repository [here](https://github.com/Vini2/PizzaProblem).

## References

Condition (Java Platform SE 7) – [https://docs.oracle.com/javase/7/docs/api/java/util/concurrent/locks/Condition.html](https://docs.oracle.com/javase/7/docs/api/java/util/concurrent/locks/Condition.html)

Java Concurrency – Part 5 : Monitors (Locks and Conditions) – [https://baptiste-wicht.com/posts/2010/09/java-concurrency-part-5-monitors-locks-and-conditions.html](https://baptiste-wicht.com/posts/2010/09/java-concurrency-part-5-monitors-locks-and-conditions.html)

Late-Night Pizza – [courses.cs.washington.edu/courses/cse451/10wi/section/kim_section4.ppt](http://courses.cs.washington.edu/courses/cse451/10wi/section/kim_section4.ppt)
