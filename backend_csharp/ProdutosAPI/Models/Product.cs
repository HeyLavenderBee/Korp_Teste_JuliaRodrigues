using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NotaFiscalAPI.Models
{
  [Table("produtos")]
  public class Product
  {
    [Key]
    [Column("codigo")]
    public int Codigo { get; set; }

    [Column("descricao")]
    public string Descricao { get; set; }

    [Column("saldo")]
    public int Saldo { get; set; }

    public Product(int codigo, string descricao, int saldo)
    {
      Codigo = codigo;
      Descricao = descricao;
      Saldo = saldo;
    }
  }
}
