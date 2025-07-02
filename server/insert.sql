-- Insérer des catégories
INSERT INTO categories (id, name) VALUES
  (1, 'Chien'),
  (2, 'Chat'),
  (3, 'Rongeur');

-- Insérer des utilisateurs

INSERT INTO users ("id", "firstName", "lastName", "email", "phone_number", "city", "password", "is_admin", "created_at", "updated_at")
VALUES
  (1, 'Alice', 'Martin', 'alice@example.com', '0600000001', 'Paris', 'hashedpassword1', false, NOW(), NOW()),
  (2, 'Bob', 'Durand', 'bob@example.com', '0600000002', 'Lyon', 'hashedpassword2', true, NOW(), NOW());

-- Insérer des animaux
INSERT INTO animals (id, user_id, name, category_id, description, price, age, breed, image, created_at, updated_at)
VALUES
  (1, 1, 'Rex', 1, 'Chien joueur, adore les promenades et les friandises.', 300.0, 2, 'Berger', 'dog.jpg', NOW(), NOW()),
  (2, 2, 'Miaou', 2, 'Chat câlin, aime dormir au soleil.', 150.0, 1, 'Siamois', 'cat.png', NOW(), NOW()),
  (3, 1, 'Speedy', 3, 'Petit rongeur vif, idéal pour les enfants.', 30.0, 1, 'Hamster', 'indianPig.png', NOW(), NOW()),
  (4, 2, 'Choco', 1, 'Chien calme et affectueux, parfait pour la famille.', 250.0, 4, 'Labrador', 'doggystyle.png', NOW(), NOW()),
  (5, 1, 'Curious', 1, 'Chien curieux, adore explorer et flairer.', 350.0, 2, 'Golden Retriever', 'doggy.png', NOW(), NOW());

-- Insérer des paniers
INSERT INTO carts (id, user_id, quantity, total_price)
VALUES
  (1, 1, 2, 450.0),
  (2, 2, 1, 150.0);

-- Insérer des items de panier
INSERT INTO carts_items (id, animal_id, cart_id)
VALUES
  (1, 1, 1),
  (2, 2, 2),
  (3, 3, 1);

