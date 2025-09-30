# Flappy Bird v2: C# ve Blazor ile Geliştirilmiş Versiyon

Bu proje, Nesne Tabanlı Programlama dersi kapsamında geliştirilen ilk Flappy Bird prototipinin, modern bir C# teknolojisi olan **Blazor WebAssembly** kullanılarak tamamen C# dilinde yeniden yazılmış versiyonudur.

## Oynanış Gifi
![Image](https://github.com/user-attachments/assets/b302e579-f6b2-498b-b3e5-f00e05ff5e5d)

## Canlı Demo

**[Oyunun Canlı Demosuna Buradan Ulaşabilirsiniz!](https://tevfikmetinn.github.io/FlappyBirdBlazor/)**

---



### Bu Projede Neler Öğrendim?

Bu proje, benim için teorik C# bilgilerini pratik bir web uygulamasında hayata geçirme fırsatı sundu:

#### 1. C# ile Nesne Yönelimli Tasarım
JavaScript nesneleri yerine, `Bird` ve `Pipe` gibi tam teşekküllü **C# sınıfları (`class`)** oluşturarak Nesne Yönelimli Programlama'nın gücünü kullandım. Kapsülleme (encapsulation) sayesinde her nesnenin kendi mantığını (örn: `bird.Update()`, `bird.Jump()`) kendi içinde taşımasını sağladım. Bu, kodun daha organize, okunabilir ve yönetilebilir olmasını sağladı.

#### 2. Blazor Mimarisi ve Bileşen Modeli
Blazor'un **bileşen (`.razor` dosyaları)** yapısını, HTML ve C# kodunu bir arada nasıl yönettiğini öğrendim. `@code` bloğu, `@page` direktifi, `@inject` ile servis ekleme ve `@onkeydown` gibi olayları C# metotlarına bağlama gibi Blazor'a özgü konseptleri kavradım.

#### 3. Blazor Yaşam Döngüsü (Lifecycle)
Bir bileşenin yaşam döngüsünü ve `OnAfterRenderAsync` gibi metotların, HTML elementleri render edildikten sonra (örneğin Canvas'ı hazırlamak için) kod çalıştırmak için ne kadar önemli olduğunu anladım.

#### 4. C# ve JavaScript Arasındaki Köprü: JS Interop
Blazor'un en güçlü özelliklerinden biri olan **JavaScript Interop**'u kullandım. `IJSRuntime` servisi aracılığıyla, C# kodumdan JavaScript'te yazdığım çizim fonksiyonlarını (`renderGame` gibi) nasıl çağıracağımı öğrendim. Bu, C#'ın güçlü mantık yeteneklerini, tarayıcının yerel API'leriyle (Canvas gibi) birleştirmemi sağladı.

#### 5. WebAssembly'de Performans Optimizasyonu
İlk denemelerde oyunun yavaş çalıştığını fark ettim. Sebebinin, her animasyon karesinde C#'tan JavaScript'e yapılan çok sayıda küçük çağrı olduğunu öğrendim. Çözüm olarak, tüm oyun durumunu C#'ta tek bir nesneye paketleyip, JavaScript'e tek bir çağrıda göndererek **JS Interop çağrılarını optimize ettim.** Bu sayede oyunun performansı ciddi ölçüde arttı.

### Kullanılan Teknolojiler
* **Frontend & Backend (Tek Projede):** C# 10, Blazor WebAssembly, .NET 6.0 
* **Çizim API'si:** HTML5 Canvas (JS Interop ile)
* **Versiyon Kontrol:** Git & GitHub
