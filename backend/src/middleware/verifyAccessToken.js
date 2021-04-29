import jwt from 'express-jwt';
import jwtAuthz from 'express-jwt-authz';
import jwksRsa from 'jwks-rsa';

export const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://avlr.eu.auth0.com/.well-known/jwks.json`,
  }),

  audience: 'http://localhost:3001',
  issuer: [`https://avlr.eu.auth0.com/`],
  algorithms: ['RS256'],
});
