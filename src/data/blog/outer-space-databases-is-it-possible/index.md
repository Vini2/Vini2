---
title: "Outer Space Databases — Is it possible?"
slug: "outer-space-databases-is-it-possible"
date: "2017-05-06"
updated: "2017-05-06"
sourceUrl: "https://vijinimallawaarachchi.com/2017/05/06/outer-space-databases%e2%80%8a-%e2%80%8ais-it-possible/"
featuredImage: "/blog-images/outer-space-databases-is-it-possible/db-on-moon.png"
categories: ["Data", "Databases", "Space"]
tags: ["Databases", "Tech"]
---
Have you ever imagined how it will be to have databases on different planets? How long will it take for queries to process and return results among databases on different planets? I was just wondering and thought to let my imagination carry on the rest. It is true that the only planet humans have set foot on, other than Earth is the Moon, which is Earth’s only permanent natural satellite. So as a start, I thought of setting up an imaginary data centre on Moon to communicate with a data centre on Earth and do a bit of maths…

Following are the data I have considered.

- Distance between Earth and Moon (centre to centre)= 384,400 km
- Radius of Earth = 6,371 km
- Radius of Moon = 1,737 km

The Moon orbits the Earth once every 27 days approximately. It also takes approximately 27 days for the moon to rotate once around its own axis. As a result, the moon does not seem to be spinning but we see the same phase when observed from the same point on Earth. At such an instance, we can calculate the distance between the surfaces as shown.

Surface to Surface distance between Earth and Moon

= Distance between Earth and Moon — (Radius of Earth + Radius of Moon)

= 384,400 km — (6,371 km + 1,737 km) = 376,292 km

In order to carry out communication between data centers I have considered electromagnetic waves as the medium. Using cables is not practical as eventually it will wrap around both planets and will become a disaster. However, if we imagine such a situation for a moment, the minimum length of cables that will be required is 376,292 km. You can take this cable, go around Earth and wrap it along the equator for 9 times! I simply cannot imagine manufacturing such a long length continuously. So I’m going to skip cables and go with EM.

The speed of electromagnetic waves in a vacuum is 299,792,458 m/s. So now comes the fun part. Assume the lunar data centre is right above the Earth data centre and you are doing a SELECT query on one of the lunar databases. Let’s see how long it will take for a query made from Earth to reach the lunar data centre via space.

Time taken for a query to reach Moon = 376,292 km / 299,792.458 km/s = 1.255 s

It can be assumed that the SELECT query can be made and results can be brought back to the Earth data centre in under 3 seconds.

When considering Mars, Earth’s neighbour, it will take around 25 minutes for the results to return to Earth. You can initiate the communication and go have a snack. By the time you come back your results will be received…!

My imaginary data centre on Moon seems reasonable when considering the distance EM waves have to travel. However, there are feasibility issues. The major issue is the problem of heat transfer. Since there is no atmosphere on Moon, the data centre would have to radiate heat like the ISS or use heat sinks like water.

Let’s hope that technology will develop in the future and scientists will find means to send information at speeds greater than that of light. Then we can consider having data centers on distant planets…! Till then,

> Let your imagination do the implementation…

## References

1. Physics Stack Exchange – https://physics.stackexchange.com/
2. Wikipedia, the free encyclopedia – https://en.wikipedia.org/
3. Space.com – [http://www.space.com/](http://www.space.com/)
4. Developing a Datacenter on the moon?

> Developing a Datacenter on the moon?
>
> byu/DekkerVS inspace
