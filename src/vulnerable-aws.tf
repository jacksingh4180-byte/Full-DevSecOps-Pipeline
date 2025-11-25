# vulnerable-aws.tf
provider "aws" {
  region = "us-east-1"
}

# Insecure: Security group allowing SSH from anywhere
resource "aws_security_group" "open_sg" {
  name        = "open-sg"
  description = "Open to the world (insecure)"
  vpc_id      = "vpc-PLACEHOLDER"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # <-- Vulnerability: SSH exposed to internet
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Insecure: Public S3 bucket
resource "aws_s3_bucket" "public_bucket" {
  bucket = "jdsec-vulnerable-demo-bucket-12345"
  acl    = "public-read" # <-- Vulnerability: public-read makes objects world-readable
}

# Insecure: Overly permissive IAM policy
resource "aws_iam_policy" "wildcard_policy" {
  name        = "wildcard-policy"
  description = "Overly permissive policy"
  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "*",
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
POLICY
}
