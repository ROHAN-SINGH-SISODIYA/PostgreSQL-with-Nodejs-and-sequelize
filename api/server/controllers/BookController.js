/**
 *
 * Description : This is Book Controller File.
 *
 * @email rohanrajput32843@gmail.com
 */
/***/

import BookService from '../services/BookService';
import Util from '../utils/Utils';

//This is Object for Util class which is declare in utils/Utils.js File
const util = new Util();

/**
 * Class Name : BookController
 *
 * Description : This is Book Controller File.
 */
/***/
class BookController{

        /**
         * Function Name : getAllBooks
         *
         * Description : It is Static Function It fetch all the Books Information.
         *
         * Parameters : Null
         */
        /***/
        static async getAllBooks(req,res){
            try{
                const allBooks = await BookService.getAllBooks();
                if(allBooks.length>0){
                    util.setSuccess(200,'Book retrieved',allBooks);
                }else{
                    util.setSuccess(200,'No Book found');
                }
                return util.send(res);
            }
            catch(error){
                util.setError(400,error);
                return util.send(res);
            }
        }
        /**
         * Function Name : addBook
         *
         * Description : It is Static Function It add New book.
         *
         * Parameters : title,price,description
         */
        /***/
        static async addBook(req,res){
            if(!req.body.title || !req.body.price || !req.body.description){
                util.setError(400,'Please provide complete details');
                return util.send(res);
            }
            const newBook = req.body;
            try{
                const createdBook = await BookService.addBook(newBook);
                util.setSuccess(201,'Book Added!',createdBook);
                return util.send(res);
            }
            catch(error){
                util.setError(400,error.message);
                return util.send(res);
            }
        }
        /**
         * Function Name : updatedBook
         *
         * Description : It is Static Function It Update the book information using Book params Id.
         *
         * Parameters : title,price,description with Book param ID
         */
        /***/
        static async updatedBook(req,res){
            const alteredBook =req.body;
            const {id} = req.params;
            if(!Number(id)){
                util.setError(400,'Please input a valid numeric value');
                return util.send(res);
            }
            try{
                const updateBook = await BookService.updateBook(id,alteredBook);
                if(!updateBook){
                    util.setError(404,`can't find book with the id:${id}`);
                }else{
                    util.setSuccess(200,'Book updated',updateBook);
                }
                return util.send(res);
              }
              catch(error){
                  util.setError(404,error);
                  return util.send(res);
              }
            }
        /**
         * Function Name : getABook
         *
         * Description : It is Static async Function This function get the single book information using book params id.
         *
         * Parameters : Book param ID
         */
        /***/
        static async getABook(req,res){
                const {id}=req.params;

                if(!Number(id)){
                    util.setError(400,'Please input a valid numeric value');
                    return util.send(res);
                }
                try{
                    const theBook =await BookService.getABook(id);

                    if(!theBook){
                        util.setError(404,`can't find book with the id ${id}`);
                    }else{
                        util.setSuccess(200,'Found Book',theBook);
                    }
                    return util.send(res);
                  }
                  catch(error){
                      util.setError(404,error);
                      return util.send(res);
                  }
        }
        /**
         * Function Name : deleteBook
         *
         * Description : It is Static async Function This function Delete the Book information using book params id.
         *
         * Parameters : Book param ID
         */
        /***/
        static async deleteBook(req,res){
                    const {id}=req.params;
                    if (!Number(id)) {
                        util.setError(400, 'Please provide a numeric value');
                        return util.send(res);
                      }
                      try {
                        const bookToDelete = await BookService.deleteBook(id);
                        if (bookToDelete) {
                          util.setSuccess(200, 'Book deleted');
                        } else {
                          util.setError(404, `Book with the id ${id} cannot be found`);
                        }
                        return util.send(res);
                      } catch (error) {
                        util.setError(400, error);
                        return util.send(res);
                      }
        }
}
export default BookController;
