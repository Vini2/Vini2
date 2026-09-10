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
<p>A group of students are studying for an exam. The students can study only while eating pizza. Each student executes the following loop:</p>
<blockquote><p>while (true) {<br />
&nbsp;&nbsp;&nbsp;&nbsp;pick up a slice of pizza;<br />
&nbsp;&nbsp;&nbsp;&nbsp;study while eating the pizza;<br />
}</p></blockquote>
<p>If a student finds that the pizza is gone, the student goes to sleep until another pizza arrives. The first student to discover that the group is out of pizza calls Kamal’s Pizza to order another pizza before going to sleep. Each pizza has <strong>S</strong> slices. Once Kamal delivers pizza, he wake up all the students in the group. Then the students pick up a slice of pizza and go back to studying, and the process continues.</p>
<p>Write code to synchronize the student threads and the Kamal’s pizza delivery thread.</p>
<p>Your solution should avoid deadlock and call Kamal’s Pizza (i.e., wake up the delivery thread) exactly once each time a pizza is exhausted. No slice/piece of pizza may be consumed by more than one student.</p>
<h2>Solution</h2>
<style>.gist table { margin-bottom: 0; }</style>
<div id="gist49502155">
<div translate="no">
<div>
<div>
<div id="file-pizzaproblem-java">
<div itemprop="text"
     
      tabindex="0" role="region"
      aria-label="PizzaProblem.java content, created by Vini2 on 09:54AM on June 19, 2017."
    ></p>
<div>
<p>  <template></p>
<div>
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg><br />
    <span><br />
      This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.<br />
      <a href="https://github.co/hiddenchars" target="_blank">Learn more about bidirectional Unicode characters</a><br />
    </span></p>
<div>        <a href="{{ revealButtonHref }}">    Show hidden characters<br />
</a>
</div>
</div>
<p></template><br />
<template><br />
  <span aria-label="This line has hidden Unicode characters"><br />
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg><br />
</span></template></p>
<table data-hpc data-paste-markdown-skip>
<tr>
<td id="file-pizzaproblem-java-L1"></td>
<td id="file-pizzaproblem-java-LC1">import java.util.concurrent.locks.Condition;</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L2"></td>
<td id="file-pizzaproblem-java-LC2">import java.util.concurrent.locks.Lock;</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L3"></td>
<td id="file-pizzaproblem-java-LC3">import java.util.concurrent.locks.ReentrantLock;</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L4"></td>
<td id="file-pizzaproblem-java-LC4">import static java.lang.Thread.sleep;</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L5"></td>
<td id="file-pizzaproblem-java-LC5">import java.util.Random;</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L6"></td>
<td id="file-pizzaproblem-java-LC6">
</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L7"></td>
<td id="file-pizzaproblem-java-LC7">/*</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L8"></td>
<td id="file-pizzaproblem-java-LC8"> * To change this license header, choose License Headers in Project Properties.</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L9"></td>
<td id="file-pizzaproblem-java-LC9"> * To change this template file, choose Tools | Templates</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L10"></td>
<td id="file-pizzaproblem-java-LC10"> * and open the template in the editor.</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L11"></td>
<td id="file-pizzaproblem-java-LC11"> */</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L12"></td>
<td id="file-pizzaproblem-java-LC12">
</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L13"></td>
<td id="file-pizzaproblem-java-LC13">/**</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L14"></td>
<td id="file-pizzaproblem-java-LC14"> *</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L15"></td>
<td id="file-pizzaproblem-java-LC15"> * @author Vijini</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L16"></td>
<td id="file-pizzaproblem-java-LC16"> */</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L17"></td>
<td id="file-pizzaproblem-java-LC17"> </td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L18"></td>
<td id="file-pizzaproblem-java-LC18">public class PizzaProblem {</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L19"></td>
<td id="file-pizzaproblem-java-LC19">    </td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L20"></td>
<td id="file-pizzaproblem-java-LC20">    public static void main(String[] args) {</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L21"></td>
<td id="file-pizzaproblem-java-LC21">        StudyGroup studyGroup = new StudyGroup();   //Create student group</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L22"></td>
<td id="file-pizzaproblem-java-LC22">        int students = 6;</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L23"></td>
<td id="file-pizzaproblem-java-LC23">        </td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L24"></td>
<td id="file-pizzaproblem-java-LC24">        for (int i = 0; i &lt; students; i++) {</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L25"></td>
<td id="file-pizzaproblem-java-LC25">            new Student(studyGroup).start();        //Create Student threads</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L26"></td>
<td id="file-pizzaproblem-java-LC26">        }</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L27"></td>
<td id="file-pizzaproblem-java-LC27">        </td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L28"></td>
<td id="file-pizzaproblem-java-LC28">        new PizzaDelivery(studyGroup).start();      //Create Pizza Delivery thread</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L29"></td>
<td id="file-pizzaproblem-java-LC29">    }</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L30"></td>
<td id="file-pizzaproblem-java-LC30">}</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L31"></td>
<td id="file-pizzaproblem-java-LC31">
</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L32"></td>
<td id="file-pizzaproblem-java-LC32">
</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L33"></td>
<td id="file-pizzaproblem-java-LC33">//Study group class</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L34"></td>
<td id="file-pizzaproblem-java-LC34">class StudyGroup {</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L35"></td>
<td id="file-pizzaproblem-java-LC35">
</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L36"></td>
<td id="file-pizzaproblem-java-LC36">    int S = 5;</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L37"></td>
<td id="file-pizzaproblem-java-LC37">    int slices = 0;     //No. of pizza slices</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L38"></td>
<td id="file-pizzaproblem-java-LC38">
</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L39"></td>
<td id="file-pizzaproblem-java-LC39">    private final Lock mutex = new ReentrantLock();     //Lock to ensure one Student can take a slice at a time</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L40"></td>
<td id="file-pizzaproblem-java-LC40">
</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L41"></td>
<td id="file-pizzaproblem-java-LC41">    private final Condition orderPizza = mutex.newCondition();      //Condition to order pizza</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L42"></td>
<td id="file-pizzaproblem-java-LC42">    private final Condition deliverPizza = mutex.newCondition();    //Condition to deliver pizza</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L43"></td>
<td id="file-pizzaproblem-java-LC43">
</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L44"></td>
<td id="file-pizzaproblem-java-LC44">    private boolean firstToSee = true;                              //First student to see group is out of pizza</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L45"></td>
<td id="file-pizzaproblem-java-LC45">
</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L46"></td>
<td id="file-pizzaproblem-java-LC46">    void beginStudying() throws InterruptedException {</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L47"></td>
<td id="file-pizzaproblem-java-LC47">        mutex.lock();</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L48"></td>
<td id="file-pizzaproblem-java-LC48">        if (slices &gt; 0) {</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L49"></td>
<td id="file-pizzaproblem-java-LC49">            &#8211;slices;                   //Decrease no. of slices. Student picks up a slice of pizza.</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L50"></td>
<td id="file-pizzaproblem-java-LC50">            //Student takes a slice and starts studying</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L51"></td>
<td id="file-pizzaproblem-java-LC51">            System.out.println(&quot;Student &quot; + Thread.currentThread().getId() + &quot; took a slice of pizza and is studying&quot;);</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L52"></td>
<td id="file-pizzaproblem-java-LC52">        } else {</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L53"></td>
<td id="file-pizzaproblem-java-LC53">            if (firstToSee) {</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L54"></td>
<td id="file-pizzaproblem-java-LC54">                //First student to see that the group is out of pizza</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L55"></td>
<td id="file-pizzaproblem-java-LC55">                System.out.println(&quot;Group out of pizza. Student &quot; + Thread.currentThread().getId() + &quot; calls Kamal&#39;s Pizza&quot;);</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L56"></td>
<td id="file-pizzaproblem-java-LC56">                orderPizza.signal();        //Call Kamal&#39;s Pizza and wake up delivery thread</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L57"></td>
<td id="file-pizzaproblem-java-LC57">                firstToSee = false;</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L58"></td>
<td id="file-pizzaproblem-java-LC58">            }</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L59"></td>
<td id="file-pizzaproblem-java-LC59">            System.out.println(&quot;Student &quot; + Thread.currentThread().getId() + &quot; sleeps&quot;);</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L60"></td>
<td id="file-pizzaproblem-java-LC60">            deliverPizza.await();           //Student sleeps till pizza is delivered</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L61"></td>
<td id="file-pizzaproblem-java-LC61">        }</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L62"></td>
<td id="file-pizzaproblem-java-LC62">        mutex.unlock();</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L63"></td>
<td id="file-pizzaproblem-java-LC63">        </td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L64"></td>
<td id="file-pizzaproblem-java-LC64">    }</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L65"></td>
<td id="file-pizzaproblem-java-LC65">
</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L66"></td>
<td id="file-pizzaproblem-java-LC66">    void checkOrder() throws InterruptedException {</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L67"></td>
<td id="file-pizzaproblem-java-LC67">        mutex.lock();</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L68"></td>
<td id="file-pizzaproblem-java-LC68">        slices = S;                         //Fill plate with new pizza</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L69"></td>
<td id="file-pizzaproblem-java-LC69">        System.out.println(&quot;Pizza delivered&quot;);</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L70"></td>
<td id="file-pizzaproblem-java-LC70">        firstToSee = true;</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L71"></td>
<td id="file-pizzaproblem-java-LC71">        System.out.println(&quot;Wake up sleeping students\n&quot;);</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L72"></td>
<td id="file-pizzaproblem-java-LC72">        deliverPizza.signalAll();           //Wake up all sleeping Students</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L73"></td>
<td id="file-pizzaproblem-java-LC73">        orderPizza.await();                 //PizzaDelivery goes to sleep</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L74"></td>
<td id="file-pizzaproblem-java-LC74">        mutex.unlock();</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L75"></td>
<td id="file-pizzaproblem-java-LC75">        </td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L76"></td>
<td id="file-pizzaproblem-java-LC76">    }</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L77"></td>
<td id="file-pizzaproblem-java-LC77">}</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L78"></td>
<td id="file-pizzaproblem-java-LC78">
</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L79"></td>
<td id="file-pizzaproblem-java-LC79">
</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L80"></td>
<td id="file-pizzaproblem-java-LC80">//Pizza Delivery class</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L81"></td>
<td id="file-pizzaproblem-java-LC81">class PizzaDelivery extends Thread{</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L82"></td>
<td id="file-pizzaproblem-java-LC82">    </td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L83"></td>
<td id="file-pizzaproblem-java-LC83">    private StudyGroup studyGroup = new StudyGroup();</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L84"></td>
<td id="file-pizzaproblem-java-LC84">
</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L85"></td>
<td id="file-pizzaproblem-java-LC85">    public PizzaDelivery(StudyGroup sg) {</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L86"></td>
<td id="file-pizzaproblem-java-LC86">        this.studyGroup = sg;</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L87"></td>
<td id="file-pizzaproblem-java-LC87">    }</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L88"></td>
<td id="file-pizzaproblem-java-LC88">    </td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L89"></td>
<td id="file-pizzaproblem-java-LC89">    @Override</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L90"></td>
<td id="file-pizzaproblem-java-LC90">    public void run(){</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L91"></td>
<td id="file-pizzaproblem-java-LC91">        while (true) {            </td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L92"></td>
<td id="file-pizzaproblem-java-LC92">            try {</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L93"></td>
<td id="file-pizzaproblem-java-LC93">                studyGroup.checkOrder();</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L94"></td>
<td id="file-pizzaproblem-java-LC94">                sleep(5000);                        //Wait till pizza is delivered</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L95"></td>
<td id="file-pizzaproblem-java-LC95">            } catch (InterruptedException ex) {</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L96"></td>
<td id="file-pizzaproblem-java-LC96">                ex.printStackTrace();</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L97"></td>
<td id="file-pizzaproblem-java-LC97">            }</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L98"></td>
<td id="file-pizzaproblem-java-LC98">        }</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L99"></td>
<td id="file-pizzaproblem-java-LC99">    }</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L100"></td>
<td id="file-pizzaproblem-java-LC100">}</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L101"></td>
<td id="file-pizzaproblem-java-LC101">
</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L102"></td>
<td id="file-pizzaproblem-java-LC102">
</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L103"></td>
<td id="file-pizzaproblem-java-LC103">//Student class</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L104"></td>
<td id="file-pizzaproblem-java-LC104">class Student extends Thread{</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L105"></td>
<td id="file-pizzaproblem-java-LC105">
</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L106"></td>
<td id="file-pizzaproblem-java-LC106">    StudyGroup studyGroup = new StudyGroup();</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L107"></td>
<td id="file-pizzaproblem-java-LC107">    private Random r = new Random(); </td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L108"></td>
<td id="file-pizzaproblem-java-LC108">    </td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L109"></td>
<td id="file-pizzaproblem-java-LC109">    public Student(StudyGroup sg) {</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L110"></td>
<td id="file-pizzaproblem-java-LC110">        this.studyGroup = sg;</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L111"></td>
<td id="file-pizzaproblem-java-LC111">    }</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L112"></td>
<td id="file-pizzaproblem-java-LC112">    </td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L113"></td>
<td id="file-pizzaproblem-java-LC113">    @Override</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L114"></td>
<td id="file-pizzaproblem-java-LC114">    public void run(){</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L115"></td>
<td id="file-pizzaproblem-java-LC115">        while (true) {            </td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L116"></td>
<td id="file-pizzaproblem-java-LC116">            try {</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L117"></td>
<td id="file-pizzaproblem-java-LC117">                studyGroup.beginStudying();</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L118"></td>
<td id="file-pizzaproblem-java-LC118">                sleep(r.nextInt(10000));            //Wait till pizza slice finishes</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L119"></td>
<td id="file-pizzaproblem-java-LC119">            } catch (InterruptedException ex) {</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L120"></td>
<td id="file-pizzaproblem-java-LC120">                ex.printStackTrace();</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L121"></td>
<td id="file-pizzaproblem-java-LC121">            }</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L122"></td>
<td id="file-pizzaproblem-java-LC122">        }</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L123"></td>
<td id="file-pizzaproblem-java-LC123">    }</td>
</tr>
<tr>
<td id="file-pizzaproblem-java-L124"></td>
<td id="file-pizzaproblem-java-LC124">}</td>
</tr>
</table>
</div></div>
</p></div>
</div></div>
<div>
        <a href="https://gist.github.com/Vini2/1ba4b9cc15222b81d5c50aeb11e200c4/raw/91bcb7a39c5496193d76b4b9aa0a586c041e3eb6/PizzaProblem.java">view raw</a><br />
        <a href="https://gist.github.com/Vini2/1ba4b9cc15222b81d5c50aeb11e200c4#file-pizzaproblem-java"><br />
          PizzaProblem.java<br />
        </a><br />
        hosted with &#10084; by <a href="https://github.com">GitHub</a>
      </div>
</p></div>
</div>
<h2>Discussion</h2>
<p>If a student finds that the pizza is gone, the student goes to sleep until another pizza arrives. Once the pizza is delivered, the delivery person should wake up all the sleeping students. In order to simulate this behaviour, we have to use a special type of construct named <strong>Condition Variable</strong>.</p>
<h3>What are Condition Variable?</h3>
<p>Condition variables allow to check for a condition, and makes a thread wait until the condition is satisfied. When the condition is satisfied, it will wake up the sleeping thread. There is a special method to broadcast and wake up all the sleeping threads as well.</p>
<p>In Java, you can create conditions using the <strong>newCondition</strong> method of the Lock (lines 41 and 42). A condition is a variable of type <strong>Condition</strong>. You can make the current thread wait on the condition using the <strong>await()</strong> method and you can signal threads using <strong>signal()</strong> and <strong>signalAll()</strong> methods. The <strong>signalAll()</strong> method wakes up all the threads waiting on the condition variable.</p>
<h3>What happens in the code?</h3>
<p>In the code given above, if a Student thread sees that the slice count is zero, it should go to sleep. This is done at line 60; <strong>deliverPizza<span>.</span>await()</strong>.</p>
<p>The first student to see that the slice count is zero, wakes up the pizza delivery thread. This is done at line 56; <strong>orderPizza<span>.</span>signal()</strong>. Then he goes to sleep like other students at line 60.</p>
<p>Once pizza is delivered and the plate is full, the pizza delivery thread wakes up all the sleeping student threads. This is done at line 72; <strong>deliverPizza<span>.</span>signalAll()</strong>. This is a broadcast signal for all the student threads to wake up.</p>
<h2>Resources</h2>
<p>You can find the complete organised solution in my GitHub repository <a href="https://github.com/Vini2/PizzaProblem" target="_blank" rel="noopener">here</a>.</p>
<h2>References</h2>
<p>Condition (Java Platform SE 7) &#8211; <a href="https://docs.oracle.com/javase/7/docs/api/java/util/concurrent/locks/Condition.html" target="_blank" rel="noopener">https://docs.oracle.com/javase/7/docs/api/java/util/concurrent/locks/Condition.html</a></p>
<p>Java Concurrency &#8211; Part 5 : Monitors (Locks and Conditions) &#8211; <a href="https://baptiste-wicht.com/posts/2010/09/java-concurrency-part-5-monitors-locks-and-conditions.html" target="_blank" rel="noopener">https://baptiste-wicht.com/posts/2010/09/java-concurrency-part-5-monitors-locks-and-conditions.html</a></p>
<p>Late-Night Pizza &#8211; <a href="http://courses.cs.washington.edu/courses/cse451/10wi/section/kim_section4.ppt" target="_blank" rel="noopener">courses.cs.washington.edu/courses/cse451/10wi/section/kim_section4.ppt</a></p>
