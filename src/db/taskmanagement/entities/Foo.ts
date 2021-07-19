import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("foo", { schema: "public" })
export class Foo {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("json", { name: "properties", nullable: true })
  properties: object | null;
}
