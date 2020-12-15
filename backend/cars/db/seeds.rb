# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Favorite.delete_all
Car.delete_all
User.delete_all

cars =
         [{make: "Acura/Honda", model: "NSX", year:"1990-2005, 2016-Present", description: "One of Japan's greatest Supercar", link: "https://moneyinc.com/history-evolution-acura-nsx/", image: "https://www.topgear.com/sites/default/files/styles/fit_980x551/public/images/news-article/carousel/2019/02/70cacd3a3228d1f81fc5ca62bcc04300/_h_7047.jpg?itok=fHYJ1uQC"},
         {make: "Honda", model: "S2000", year: "1999-2009", description: "Japan's sleek, stunning roadster", link: "http://thedavisexperiment.com/s2000/index.html", image: "https://www.motorbiscuit.com/wp-content/uploads/2020/03/Honda-S2000-2000-1280-01-1024x735.jpg"},
         {make: "Honda", model: "Civic", year: "1972-Present", description: "One of Honda's most popular sedan in the market", link: "https://www.caranddriver.com/features/g15381133/honda-civic-models-history/", image: "https://cdn.motor1.com/images/mgl/M2K8w/s3/honda-civic-evolution.webp"},
         {make: "Mazda", model: "RX7", year: "1978-2002", description: "Most popular rotary powered car in history", link: "https://garagedreams.net/history/complete-history-mazda-rx-7", image: "https://www.rotaryheads.com/PDF/images/rx7picture.jpg"},
         {make: "Mazda", model: "Miata", year: "1989-Present", description: "Poor man's sports car", link: "https://www.gearpatrol.com/cars/a104711/evolution-of-the-mazda-mx-5-miata-the-most-popular-roadster-of-all-time/", image: "https://1ijylmozio83m2nkr2v293mp-wpengine.netdna-ssl.com/wp-content/uploads/2016/05/mazda_mx5_all4generations_001-1024x580.jpg"},
         {make: "Mitsubishi", model: "Evolution", year: "1992-2016", description: "Four door sedan known for its success in rally racing", link: "https://www.caranddriver.com/features/g15383456/mitsu-metamorphosis-the-history-of-the-mitsubishi-lancer-evolution/", image: "https://s3-prod.autonews.com/s3fs-public/Lancer.Evo_.jpg"},
         {make: "Nissan/Datsun", model: "Z-Series", year: "1969-Present", description: "An iconic JDM roadstar all the way from the 1960s", link: "https://www.caranddriver.com/features/g15377615/my-fair-lady-a-visual-history-of-the-nissan-z-car/", image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/z-heritage-01-source-v2-1600182846.jpg?crop=1.00xw:0.608xh;0,0.326xh&resize=980:*"},
         {make: "Nissan", model: "GTR", year: "1989-Present", description: "A JDM lover's dream car", link: "https://www.motorauthority.com/news/1107917_godzilla-s-biography-the-50-year-history-of-the-nissan-gt-r", image: "https://drivetribe.imgix.net/HfkFi3FdQXGk-ZOC3tcMgA?w=1200&h=675&fm=webp&auto=compress&lossless=true&fit=crop&crop=faces&dpr=1"},
         {make: "Subaru", model: "STI/WRX", year: "1992-Present", description: "An Mitsubishi Evolution's arch nemesis", link: "https://blog.emanualonline.com/history-of-the-subaru-impreza-wrx-sti/", image: "https://cnet4.cbsistatic.com/img/iJhmFqL6NXpQjYbSTSCNJlboyso=/1200x675/2020/04/28/865f7257-6d47-4692-9478-aca801b2aff1/s209-promo.jpg"},
         {make: "Toyota", model: "AE86/GT86", year:"1984-1986, 2012-Present", description: "The little car that dominated on the roads/track", link: "https://www.toyotaofclermont.com/blog/classic-toyota-the-ae86-and-the-toyota-86/", image: "https://i.ibb.co/RP2GfhS/image2.jpg"},
         {make: "Toyota", model: "Aristo", year: "1991-2005", description: "Comfort and power combined", link: "https://blog.beforward.jp/car-review/toyota-aristo-comfort-power-combined.html", image: "https://providecars.co.jp/wp-content/uploads/2017/07/toyota_aristo.jpg"},
         {make: "Toyota", model: "Chaser", year: "1997-2001", description: "Luxery car or race car?", link: "https://yankiigarage.com/blogs/jdm-news/toyota-chaser", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZIdqkveIQRH8n3BpHkzVku6GaEu6xHfZLmA&usqp=CAU"},
         {make: "Toyota", model: "MR2", year: "1984-2007", description: "One of Japan's only mid-engined sports coupe", link: "https://www.automobilemag.com/news/toyota-mr2-history-generations-models-differences/", image: "https://garagedreams.net/wp-content/uploads/2019/02/Toyota-MR2-History-and-Specifications-800x445.jpg"},
         {make: "Toyota", model: "Supra", year: "1978-2002, 2019-Present", description: "Japan's best most popular engineerd sports car", link: "https://www.caranddriver.com/features/g19061426/toyota-supra-history/", image: "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/03/7-CDB060117UpfCollectorCars_007.jpg?crop=0.925xw:0.925xh;0.00340xw,0.0696xh&resize=980:*"}
     ]

cars.each do |car|
  Car.create(car)
end