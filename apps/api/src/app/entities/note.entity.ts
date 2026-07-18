import { Column, CreateDateColumn, Entity, UpdateDateColumn } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/browser";

@Entity('notes')
export class NoteEntity{
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type: 'varchar', length: 50})
  title!: string;

  @Column({type: 'text'})
  body!: string;

  @CreateDateColumn({name: 'created_at'})
  createdAt!: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt!: Date;
}
