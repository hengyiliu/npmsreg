using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Sqlite;

namespace npmsreg.Models
{
    public partial class SchoolContext : DbContext
    {
        public SchoolContext()
        {
        }

        public SchoolContext(DbContextOptions<SchoolContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Families> Families { get; set; }
        public virtual DbSet<Students> Students { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                // local db
                // optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=School;Trusted_Connection=True;");
                optionsBuilder.UseSqlite("Data Source=/Users/hliu/dev/school.db;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity<Families>(entity =>
            {
                entity.Property(e => e.Address).HasMaxLength(200);

                entity.Property(e => e.City).HasMaxLength(50);

                entity.Property(e => e.FatherChineseName).HasMaxLength(50);

                entity.Property(e => e.FatherEmail).HasMaxLength(100);

                entity.Property(e => e.FatherName).HasMaxLength(100);

                entity.Property(e => e.FatherPhone).HasMaxLength(50);

                entity.Property(e => e.FatherSpecialty).HasMaxLength(100);

                entity.Property(e => e.FatherWork).HasMaxLength(100);

                entity.Property(e => e.MotherChineseName).HasMaxLength(50);

                entity.Property(e => e.MotherEmail).HasMaxLength(100);

                entity.Property(e => e.MotherName).HasMaxLength(100);

                entity.Property(e => e.MotherPhone).HasMaxLength(50);

                entity.Property(e => e.MotherSpecialty).HasMaxLength(100);

                entity.Property(e => e.MotherWork).HasMaxLength(100);

                entity.Property(e => e.SpokenLanguages)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.State).HasMaxLength(50);

                entity.Property(e => e.ZipCode).HasMaxLength(50);
            });

            modelBuilder.Entity<Students>(entity =>
            {
                entity.Property(e => e.Birthday).HasColumnType("date");

                entity.Property(e => e.ChineseName).HasMaxLength(20);

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.Gender).HasMaxLength(10);

                entity.Property(e => e.LastName).HasMaxLength(50);
            });
        }
    }
}
