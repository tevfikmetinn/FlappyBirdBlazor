namespace FlappyBirdBlazor.Models
{
    // Kuşumuzu temsil eden C# sınıfı
    public class Bird
    {
        // Bunlar, kuşun özellikleridir (Properties).
        public double X { get; set; }
        public double Y { get; set; }
        public double Width { get; set; }
        public double Height { get; set; }
        public double Gravity { get; set; }
        public double Velocity { get; set; }

        // Bu bir "Constructor" (Yapıcı Metot). Yeni bir Bird nesnesi oluşturulduğunda
        // ilk olarak bu metot çalışır ve başlangıç değerlerini atar.
        public Bird()
        {
            X = 50;
            Y = 150;
            Width = 34;
            Height = 24;
            Gravity = 0.25; // Bu ayar aynı kaldı
            Velocity = 0;
        }

        // Bunlar, kuşun yetenekleridir (Methods).
        public void Update()
        {
            // Fizik kurallarını uygula
            Velocity += Gravity;
            Y += Velocity;
        }

        public void Jump()
        {
            // Zıplama kuvvetini uygula
            Velocity = -6.5; // İSTEK: Zıplama bir tık daha azaltıldı (-7 -> -6.5)
        }
    }
}