namespace NotaFiscalAPI.Models
{
    public class Product
    {
        public Guid Codigo { get; set; }
        public string Nome { get; set; }
        public int Saldo { get; set; }

        public Product() { }

        public Product(Guid codigo, string nome, int saldo)
        {
            Codigo = codigo;
            Nome = nome;
            Saldo = saldo;
        }
    }
}
