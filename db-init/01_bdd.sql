-- Table: public.utilisateur

DROP TABLE IF EXISTS public.utilisateur;

CREATE TABLE IF NOT EXISTS public.utilisateur
(
    id_user character varying(300) COLLATE pg_catalog."default" NOT NULL,
    nom_user character varying(50) COLLATE pg_catalog."default",
    prenom_user character varying(50) COLLATE pg_catalog."default",
    email_user character varying(50) COLLATE pg_catalog."default",
    mdp_user text COLLATE pg_catalog."default",
    logo_user text COLLATE pg_catalog."default",
    tel_user character varying(50) COLLATE pg_catalog."default",
    entreprise_user character varying(50) COLLATE pg_catalog."default",
    adresse_postale_user text COLLATE pg_catalog."default",
    code_postal_user character varying(10) COLLATE pg_catalog."default",
    ville_user character varying(50) COLLATE pg_catalog."default",
    pays_user character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT user_pkey PRIMARY KEY (id_user)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.utilisateur
    OWNER to postgres;


-- Table: public.client

DROP TABLE IF EXISTS public.client;

CREATE TABLE IF NOT EXISTS public.client
(
    id_client integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    nom_client character varying(50) COLLATE pg_catalog."default",
    prenom_client character varying(50) COLLATE pg_catalog."default",
    email_client character varying(50) COLLATE pg_catalog."default",
    tel_client character varying(50) COLLATE pg_catalog."default",
    entreprise_client character varying(50) COLLATE pg_catalog."default",
    adresse_postale_client text COLLATE pg_catalog."default",
    code_postal_client character varying(10) COLLATE pg_catalog."default",
    ville_client character varying(50) COLLATE pg_catalog."default",
    pays_client character varying(50) COLLATE pg_catalog."default",
    id_user_fk character varying(300) COLLATE pg_catalog."default",
    CONSTRAINT client_pkey PRIMARY KEY (id_client),
    CONSTRAINT client_user FOREIGN KEY (id_user_fk)
        REFERENCES public.utilisateur (id_user) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.client
    OWNER to postgres;





-- Table: public.statut

DROP TABLE IF EXISTS public.statut;

CREATE TABLE IF NOT EXISTS public.statut
(
    id_statut integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    nom_statut character varying(50) COLLATE pg_catalog."default" NOT NULL,
    facture boolean NOT NULL,
    CONSTRAINT statut_pkey PRIMARY KEY (id_statut)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.statut
    OWNER to postgres;



-- Table: public.prestation

DROP TABLE IF EXISTS public.prestation;

CREATE TABLE IF NOT EXISTS public.prestation
(
    id_prestation integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    description_prestation text COLLATE pg_catalog."default" NOT NULL,
    montant_prestation numeric(15,2) NOT NULL,
    CONSTRAINT prestation_pkey PRIMARY KEY (id_prestation)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.prestation
    OWNER to postgres;


-- Table: public.devis

DROP TABLE IF EXISTS public.devis;

CREATE TABLE IF NOT EXISTS public.devis
(
    id_devis integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    numero_devis character varying(50) COLLATE pg_catalog."default" NOT NULL,
    date_devis date NOT NULL,
    montant_total_devis numeric(15,3),
    id_client_fk integer NOT NULL,
    id_user_fk character varying(300) COLLATE pg_catalog."default" NOT NULL,
    id_statut_fk integer NOT NULL,
    CONSTRAINT devis_pkey PRIMARY KEY (id_devis),
    CONSTRAINT devis_client FOREIGN KEY (id_client_fk)
        REFERENCES public.client (id_client) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT devis_statut FOREIGN KEY (id_statut_fk)
        REFERENCES public.statut (id_statut) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT devis_user FOREIGN KEY (id_user_fk)
        REFERENCES public.utilisateur (id_user) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.devis
    OWNER to postgres;




-- Table: public.facture

DROP TABLE IF EXISTS public.facture;

CREATE TABLE IF NOT EXISTS public.facture
(
    id_facture integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    numero_facture character varying(50) COLLATE pg_catalog."default" NOT NULL,
    date_facture date NOT NULL,
    echeance_facture date NOT NULL,
    montant_total_facture numeric(15,3),
    id_client_fk integer NOT NULL,
    id_user_fk character varying(300) COLLATE pg_catalog."default" NOT NULL,
    id_statut_fk integer NOT NULL,
    CONSTRAINT facture_pkey PRIMARY KEY (id_facture),
    CONSTRAINT facture_client FOREIGN KEY (id_client_fk)
        REFERENCES public.client (id_client) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT facture_statut FOREIGN KEY (id_statut_fk)
        REFERENCES public.statut (id_statut) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT facture_user FOREIGN KEY (id_user_fk)
        REFERENCES public.utilisateur (id_user) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.facture
    OWNER to postgres;



-- Table: public.devis_prestation

DROP TABLE IF EXISTS public.devis_prestation;

CREATE TABLE IF NOT EXISTS public.devis_prestation
(
    id_devis_fk integer NOT NULL,
    id_prestation_fk integer NOT NULL,
    duree_prestation integer NOT NULL DEFAULT 1,
    CONSTRAINT devis_fk FOREIGN KEY (id_devis_fk)
        REFERENCES public.devis (id_devis) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT prestation_fk FOREIGN KEY (id_prestation_fk)
        REFERENCES public.prestation (id_prestation) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.devis_prestation
    OWNER to postgres;




-- Table: public.facture_prestation

DROP TABLE IF EXISTS public.facture_prestation;

CREATE TABLE IF NOT EXISTS public.facture_prestation
(
    id_facture_fk integer NOT NULL,
    id_prestation_fk integer NOT NULL,
    duree_prestation integer NOT NULL DEFAULT 1,
    CONSTRAINT facture_fk FOREIGN KEY (id_facture_fk)
        REFERENCES public.facture (id_facture) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT prestation_fk FOREIGN KEY (id_prestation_fk)
        REFERENCES public.prestation (id_prestation) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.facture_prestation
    OWNER to postgres;



