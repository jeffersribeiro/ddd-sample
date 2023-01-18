import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PgUser } from "./user";

@Entity("sessions")
export class PgSession {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  token!: string;

  @Column()
  expiresIn!: Date;

  @Column({ default: true })
  active!: boolean;

  @ManyToOne(() => PgUser, (user) => user.sessions)
  @JoinColumn()
  user!: PgUser;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;
}
