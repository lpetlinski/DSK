using AwesomeMvcDemo.Controllers;
using AwesomeMvcDemo.Models;
using AwesomeMvcDemo.ViewModels;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Tests.Controllers
{
    [TestFixture]
    public class AjaxCheckboxListDemoControllerTests
    {
        [Test]
        public void Index_WhenCalled_ReturnsInput()
        {
            var controller = new AjaxCheckboxListDemoController();

            var result = controller.Index();

            Assert.IsNotNull(result);
            Assert.IsInstanceOf(typeof(ViewResult), result);
            Assert.IsNotNull(((ViewResult)result).Model);
            Assert.IsInstanceOf(typeof(AjaxCheckboxListDemoInput), ((ViewResult)result).Model);
            Assert.AreEqual(Db.Categories[0].Id, ((AjaxCheckboxListDemoInput)((ViewResult)result).Model).CategoryData);
        }
    }
}
